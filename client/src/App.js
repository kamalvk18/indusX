import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/SignUp";
import CandidateUpdate from "./components/update_cand";
import Mobiliser from "./pages/Mobiliser/Mobiliser";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import HandleEvent from "./components/HandleEvent";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer'
import Leader from "./pages/Leader/Leader";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    
    <Router>
      <div className="App">
      <Navbar />  
        <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        <Route path="/login-user" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        
        <Route path ="/candidate-update" element={<CandidateUpdate/>}/>
           
          <Route path ="/mobiliser" element={<Mobiliser/>}/>
          <Route path ="/leader" element={<Leader/>}/>
          <Route path ='/edit' element ={<HandleEvent/>}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
