import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./pages/SignUp/SignUp";
import UserDetails from "./components/userDetails";
import JustViewCandidate from "./components/just_view_cand";
import CandidateUpdate from "./components/update_cand";
import MobiliserHome from "./pages/MobiliserHome/MobiliserHome";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Create from './components/Create';
import HandleEvent from "./components/HandleEvent";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer'
import MobiliserLeader from "./pages/MobiliserLeader/MobiliserLeader";

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
          <Route
            exact
            path="/sign-in"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/login-user" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path='/just-view-candidate' element={<JustViewCandidate/>} /> 
          <Route path ="/candidate-update" element={<CandidateUpdate/>}/>
           
          <Route path ="/Mobiliser_Home" element={<MobiliserHome/>}/>
          <Route path ="/Mobiliser_Leader" element={<MobiliserLeader/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path ='/edit' element ={<HandleEvent/>}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
