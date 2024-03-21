import React, { Component, useState } from "react";
import "./css/main.css"
import "./CSSFiles/signup_component.css"

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {                        //when user submits this send request to local hoste:5000/register
    if (userType == "Admin" && secretKey != "SGRS") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
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
          } else {
            alert("Something went wrong");
          }
        })
    }
  };

  return (
    <div>
    <div className="auth-wrapper container-login100">
      <div className="auth-inner wrap-login100">
      <div className="login100-pic js-tilt" data-tilt>
            <img src="https://firebasestorage.googleapis.com/v0/b/edutech-f8171.appspot.com/o/images%2Fimg-01.png?alt=media&token=70eb254d-c7e4-4cb2-9504-8d7b3fd3af63" alt="IMG" />
          </div>
        <form onSubmit={handleSubmit} className="login100-form">
          {/* <h3>Sign Up</h3> */}
          <span className="login100-form-title">Sign Up</span>
          <div>
            <h4 className="reg">Register As</h4>
            <div className="user user-box">
            <div className="user">
            <p>User</p>
            <input
            className="radio"
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            </div>
            <div className="user">
            <p>Mobiliser</p>
            <input
            className="radio"
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            </div>
            </div>
            
            
            
          </div>
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3 wrap-input100">
            <input
              type="text"
              className="form-control input100"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
            <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
          </div>

          <div className="mb-3 wrap-input100">
            <input
              type="text"
              className="form-control input100"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
            <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
          </div>

          <div className="mb-3 wrap-input100">
            <input
              type="email"
              className="form-control input100"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
          </div>

          <div className="mb-3 wrap-input100">
            <input
              type="password"
              className="form-control input100"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
             <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
          </div>

          <div className="d-grid container-login100-form-btn">
            <button type="submit" className="btn login100-form-btn">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-center p-t-12">
            <p className="txt1">Already registered </p>
            <a  className="txt2" href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}
