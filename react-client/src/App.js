// import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route,Link,Routes} from "react-router-dom"


import axios from "axios";
import { useState, useEffect } from "react";


//component
import Homepage from './components/Homepage'
import Aboutus from './components/Aboutus'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Productdetail from './components/Productdetail'
import Checkout from './components/Checkout'
import Wallet from './components/Wallet'
import Search from './components/Search'
import Logo from './components/Logo'
import { commonStyles, navStyles } from "./components/styles";
//materiel ui
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const GradientBackground = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to right, #984D38, #181E41)`,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  
  
}));


function App() {
  return (
 
    <GradientBackground>
      <Router>
        <nav style={navStyles}>
          <Logo />
          <Search />
          <Link to="/" >Home</Link>
          <Wallet />
        </nav>
        <Routes>
        
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/SignUp" element={<Signup/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Dashboard />} />
         
        </Routes>
      </Router>
     </GradientBackground>
  );
}



export default App;
