import React, { Component, useState } from "react";
import "../../components/css/main.css"
import "./SignUp.css"
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate()
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Admin");

  const handleSubmit = (e) => {    
      e.preventDefault();
      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {        //POST the request
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => {
          if (res.ok) {                  //if gets server side ok then alert regsitration successful
            alert("Registration Successful");
            navigate('/Mobiliser_Home')
          } else {
            alert("Something went wrong");
          }
        })
    }
  
  return (
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-box">
          <span className="signup-title">Sign Up</span>
          <div>
            <input
              type="text"
              className="input"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              className="input"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              className="input"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              className="input"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div >
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </div>

          <div className="txt">
            <p>Already registered? </p>
            <a href="/sign-in">sign in</a>
          </div>

        </form>
      </div>
  );
}
