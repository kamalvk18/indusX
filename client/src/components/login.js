import React, { Component, useState } from "react";
import './login.css'
import "./css/util.css"
import "./css/main.css"
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();        //prevents the default form submission behavior, allowing you to handle the submission using asynchronous JavaScript.

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);  //stores the received token in the local storage, 
          window.localStorage.setItem("loggedIn", true);    // sets a flag (loggedIn) to true, and redirects the user to the "./userDetails" page

          window.location.href = "./userDetails";
        }
      });
  }

  return (
        <div className="login-container">
          <form className="login-box" onSubmit={handleSubmit}>
            <span className="login-title">Log in</span>
             <div data-validate="Valid email is required: ex@abc.xyz">
              <input
              className="input"
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div data-validate="Password is required">
              <input
              className="input"
                type="password"
                name="pass"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button className="login-btn">Login</button>
            </div>

            <div className="txt">
              <span>Forgot </span>
              <a href="#">
                Username / Password?
              </a>
            </div>

            <div className="txt">
              <a href="/sign-up">
                Create your Account
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </a>
            </div>
          </form>
        </div>
  );
}
