import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./pages/SignUp/SignUp";
import UserDetails from "./components/userDetails";
import AdminHome from "./components/candidate_view";
import JustViewCandidate from "./components/just_view_cand";
import CandidateUpdate from "./components/update_cand";
import MobiliserHome from "./pages/Mobiliser/MobiliserHome";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RegistrationForm from "./components/cand_reg";

import Create from './components/Create';
import Layout from './components/Layout';
import Manage from "./components/Manage";

import View from "./components/View";
import HandleEvent from "./components/HandleEvent";
import CreatePayment from "./components/CreatePayment";
import ManagePayment from './components/ManagePayment';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer'


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
          <Route path ="/Home" element={<AdminHome/>}/>
          <Route path ="/candidate-update" element={<CandidateUpdate/>}/>
           
          <Route path ="/Mobiliser_Home" element={<MobiliserHome/>}/> 
          <Route path ="/students" element ={<AdminHome/>}/>
          <Route path ="/register" element={<RegistrationForm/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path ='/manage' element ={<Manage/>}/>
          <Route path ='/camp' element ={<Layout/>} />
          <Route path ='/view' element ={<View/>} />
          <Route path ='/edit' element ={<HandleEvent/>}/>
          <Route path ='/payment' element={<CreatePayment/>}/>
          <Route path ='/managep' element={<ManagePayment/>}/>

          

        </Routes>
        {/* <ImageUpload/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
