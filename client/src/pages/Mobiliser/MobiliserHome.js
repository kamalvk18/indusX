import React, { useEffect, useState } from 'react';
import MobiliserDashboard from '../../components/MobiliserDashboard/MobiliserDashboard';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MobiliserHome.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GridViewIcon from '@mui/icons-material/GridView';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListIcon from '@mui/icons-material/List';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CreateCamp from '../../components/CreateCamp/CreateCamp';
import { selectClasses } from '@mui/material';
import Register from '../../components/Register/Register';
import CampList from '../../components/CreateCamp/CampList';
import CandidateList from '../../components/Register/CandidateList';


const MobiliserHome = () => {
  const [name, setName] = useState('Rahul');
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);;
  const [manageCamp, setManageCamp] = useState(false)
  const [manageCandidate, setManageCandidate] = useState(false)
  const [candidates, setCandidates] = useState([]);
  const [Tcandidates, setTCandidates] = useState([]);
  const [selectedPath, setSelectedPath] = useState('dashboard')
  const navigate = useNavigate();
  const getRecentlyRegisteredStudents = (events) => {
    // Convert the registrationDate strings to Date objects
    const eventsWithDateObjects = events.map(event => ({
      ...event,
      registrationDate: new Date(event.registrationDate)
    }));
  
    // Sort the events based on the 'registrationDate' field in descending order
    const sortedEvents = eventsWithDateObjects.sort((a, b) => b.registrationDate - a.registrationDate);
  
    // Slice the array to get the top 5 recently registered students
    const recentlyRegisteredStudents = sortedEvents.slice(0, 5);
  
    return recentlyRegisteredStudents;
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/students')
      .then((response) => {
        setTCandidates(response.data);

        const lastdata=getRecentlyRegisteredStudents(response.data);
        
        setCandidates(lastdata);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, []);

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  const logout = () => {
    navigate('/login-user')
  };

  const handleNavigateToRegister = () => {
    navigate('/register'); // Replace '/register' with the path to your RegistrationForm component
  };

  const handleLeftNavPaths= (path) => {
    setSelectedPath(path)
    if(path === 'payments'){
    }
  }
  
  const handleTabChange = () => {
    if(selectedPath === 'dashboard'){
      return <MobiliserDashboard name={name}/>
    }
     else if(selectedPath==='createCamp'){
      return <CreateCamp/>
    }
    else if(selectedPath ==='campList')
       return <CampList/>
    else if(selectedPath ==='register')
       return <Register/>
    else if(selectedPath ==='candidateList')
       return <CandidateList/>
    ///add your condition here...
    
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className='image-container'>
          <img src='https://sgrsgroup.com/wp-content/uploads/2023/06/1200x300px.png' className='company-logo'/>
        </div>
        <div className="navvbar-buttons">
          <div className='icons-container'>
            <NotificationsIcon/>
            <PersonIcon onClick={toggleProfileDropdown} sx={{cursor:'pointer'}}/> 
          </div>
          {profileDropdownVisible && (
            <div className="profile-dropdown">
              <ul>
                <li>My Profile</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className="content-wrapper">
        <div className="sidebar">
          <ul className='sidebar-list-container'>
            <li className={selectedPath ==='dashboard' ? 'selectedTab': ''} onClick={() => handleLeftNavPaths('dashboard')}>
                <GridViewIcon />
                <p>Dashboard</p>
            </li>
            <li onClick={() => setManageCamp(!manageCamp)}>
                <ManageAccountsIcon/>
                <p>Manage Camp</p>
                {manageCamp ? <KeyboardArrowDownIcon fontSize='large'/>: <ArrowForwardIosIcon sx={{fontSize:'20px'}} />}
              
            </li>
            {manageCamp &&
              <>
              <li className={selectedPath ==='createCamp' ? 'selectedTab': ''} onClick={() => handleLeftNavPaths('createCamp')}>
                <NoteAddIcon/>
                <p>Create Camp</p>
              
            </li>
             <li className={selectedPath ==='campList' ? 'selectedTab': ''} onClick={() => handleLeftNavPaths('campList')}>
                <ListIcon/>
                <p>Camp List</p>
              
            </li>
            </>
            }
            <li onClick={() => setManageCandidate(!manageCandidate)}>
              <ReceiptLongIcon/>
              <p>Candidat Record</p>
              {manageCandidate ? <KeyboardArrowDownIcon fontSize='large'/>: <ArrowForwardIosIcon sx={{fontSize:'20px'}} />}
          </li>
          {manageCandidate &&
              <>
              <li className={selectedPath ==='register' ? 'selectedTab': ''} onClick={() => handleLeftNavPaths('register')}>
                <GroupAddIcon/>
                <p>Register</p>
              
            </li> <li className={selectedPath ==='candidateList' ? 'selectedTab': ''} onClick={() => handleLeftNavPaths('candidateList')}>
                <FormatListNumberedIcon/>
                <p>Candidate List</p>
              
            </li>
            </>
            }
            <li   className={selectedPath ==='payments' ? 'selectedTab': ''} onClick={() => handleLeftNavPaths('payments')}>
                <PaymentIcon />
                <p>Payments</p>
            </li>
            
          </ul>
          <ul>
              <li  onClick={() => navigate("")}>
                  <SettingsIcon />
                  <p>Settings</p>
              </li>
              <li  onClick={() => navigate("")}>
                <LogoutIcon />
                <p>Logout</p>
            </li>
            </ul>
        </div>
        {handleTabChange()}
      </div>
    </div>
  );
};

export default MobiliserHome;
