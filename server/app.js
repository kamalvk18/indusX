const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Candidate = require('./models/Candidate');
const Employee = require('./models/Employee')
const Approved = require('./models/Approved');
const Camp= require('./models/Camp')
const Payment = require('./models/Payment');


//for token , any key
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const JWT_SECRET = process.env.JWT_TOKEN;


app.listen(5000, () => {
    console.log("Server Started");
  });

const mongoUrl = process.env.MONGO_DB_URL;

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

  //creating a register api through which we can register a user
  app.post('/register', async (req, res) => {
    try {
        const { password, ...userData } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)

        const newEmployee = new Employee({
            ...userData,
            password: hashedPassword
        });
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        // Handle errors
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });


  app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
    const user = await Employee.findOne({ email });       //Finding User by Email
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    
    if (await bcrypt.compare(password, user.password)) {       // decrypt the password first and then compare the passwords
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {   // after comparison generates a token
        expiresIn: "30m",
      });
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });   //If the token is generated successfully, it returns a JSON response with a status of "ok" and includes the generated token in the data field.
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });

  app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {    //verify token , if yes then all details saved in user
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(user);
      if (user == "token expired") {
        return res.send({ status: "error", data: "token expired" });
      }

      const userEmail = user.email;
      Employee.findOne({ email: userEmail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) { }
  });

  app.post("/createCamp", async(req, res) => {
    try{
      const {date, time, ...others} = req.body
      const [year, month, day] = date.split('-');
      const [hour, minute] = time.split(':');
      const combinedDate = new Date(Date.UTC(year, month - 1, day, hour, minute));

      const newCamp = new Camp({date: combinedDate, ...others})
      const savedCamp = await newCamp.save()
      res.status(201).json(savedCamp)
    } catch(error) {
      console.error('Error creating Camp:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  })

  app.get("/getCamps", async(req, res) => {
    try{
      const allCamps = await Camp.find()
      console.log(allCamps)
      res.status(200).json(allCamps)
    } catch(error) {
      console.error('Error getting Camps:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  })


  app.get('/students', async (req, res) => {
    try {

      const students = await Candidate.find({});
        res.json(students);
    } catch (error) {

      console.error('Error fetching candidates:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  app.post('/updateCandidate', async (req, res) => {
    const { userId, updatedData } = req.body;
    console.log('User ID:', userId);
    console.log('Updated Data:', updatedData);
  
    try {
      // Implement logic to update the candidate data in the database
      await Candidate.findByIdAndUpdate(userId, updatedData);
      return res.json({ status: "ok", data: 'Candidate updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: "error", error: 'Internal Server Error' });
    }
  });
  
  app.post("/deleteUser", async (req, res) => {
    const { userid } = req.body;
    try {
      await Candidate.deleteOne({ _id: userid });
      res.send({ status: "Ok", data: "Deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "error", data: "Internal Server Error" });
    }
  });
  app.post('/api/submit-form', async (req, res) => {
    try {
      console.log("a post req");
      const newCamp = new Camp(req.body);
      await newCamp.save();
      res.json({ message: 'Form submitted successfully' });
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.post('/api/submit-student-form', async (req, res) => {
    try {
      // console.log("a post req");
      const newPayment = new Payment(req.body);
      await newPayment.save();
      res.json({ message: 'Form submitted successfully' });
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/updateAction', async (req, res) => {
    console.log('i received something')
    try {
      
      const { schemeName,action } = req.body;
      console.log(schemeName,action)
  
      // Update the action field in the database
      const updatedDocument = await Camp.findOneAndUpdate(
        { schemeName },
        { $set: { action: !action } },
        { new: true }
      );
        console.log(updatedDocument);
      res.json(updatedDocument);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  app.post('/api/updateEvent/:eventId', async (req, res) => {
    try {
      const { eventId } = req.params;
      const updatedEventData = req.body;
  
      // Assuming Camp is your Mongoose model
      const updatedDocument = await Camp.findOneAndUpdate(
        { _id: eventId },
        updatedEventData,
        { new: true }
      );
  
      if (!updatedDocument) {
        return res.status(404).json({ error: 'Event not found' });
      }
  
      res.status(200).json(updatedDocument);
    } catch (error) {
      console.error('Error updating event:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  app.get('/api/get-events', async (req, res) => {
      try {
        
        const events = await Camp.find(); 
        res.json(events);
      } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    app.get('/api/get-student-events', async (req, res) => {
      try {
        
        const events = await Payment.find(); 
        res.json(events);
      } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  
  
  app.post("/approveUser", async (req, res)=>{;
    const { userId, approvalData} = req.body;
    console.log('User ID:', userId);
    console.log('approval Data:', approvalData);
  
    try{
      const newUser = new Approved({...approvalData});
  
      const savedUser = await newUser.save();
      console.log('User saved to approval database:', savedUser);
      res.status(201).json(savedUser);
  
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  
  
  


  
