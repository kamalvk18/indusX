const express = require("express");
const app = express();
app.use(express.json()); 
require("dotenv").config();

const mongoUrl = process.env.MONGO_DB_URL;

const mongoose = require("mongoose");
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

const Camp = require('./models/Camp')
const Candidate = require('./models/Candidate')

app.get('/', (req, res)=>{
    res.send('Home page')
})

app.post('/createCamp', async (req,res)=>{
    try {
        const newCamp = new Camp(req.body)
        const savedCamp = await newCamp.save();
        res.status(201).json(savedCamp);
    } catch (error) {
        console.error('Error creating Camp:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
})

app.get('/getAvailableCamps', async (req, res) => {
    try{
        const availableCamps = await Camp.find()
        res.json(availableCamps)
    } catch(error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
})

app.post('/registerCandidate', async (req,res)=>{
    try {
        const newCandidate = new Candidate(req.body)
        const savedCandidate = await newCandidate.save();
        res.status(201).json(savedCandidate);
    } catch (error) {
        console.error('Error registering Candidate:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
})

app.get('/getAvailableCandidates', async (req, res) => {
    try{
        const availableCandidates = await Candidate.find()
        res.json(availableCandidates)
    } catch(error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
})

app.listen(5000, ()=>{
    console.log('Server started at port 5000!')
})