// import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route,Link,Routes} from "react-router-dom"


import axios from "axios";
import { useState, useEffect } from "react";


//component
import Homepage from './components/Homepage'
import Aboutus from './components/Aboutus'
import Dashboard from './components/Dashboard'

import Login from './components/Login'
import ProfileUser from './components/ProfileUser'
import ProfileAdmin from './components/ProfileAdmin'
import ProfileSeller from './components/ProfileSeller'
import Productdetail from './components/Productdetail'
import Checkout from './components/Checkout'
import Search from './components/Search'
import Logo from './components/Logo'
import { commonStyles, navStyles,linkHome } from "./components/styles";
//materiel ui
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const GradientBackground = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to right, #984D38, #181E41)`,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  
  
}));

//

  





function App() {


  const [userData, setUserData] = useState({});











  return (
 
    <GradientBackground>
      <Router>
        <nav style={navStyles}>
          <Logo />
          <Search />
          <div style={navStyles.linkContainer}></div>
          <Link to="/" style={navStyles.linkHome}>Home</Link>
<Link to="/Checkout" style={navStyles.linkCheckout}>Checkout</Link>
<Link to="/Profile" style={navStyles.linkProfile}>{userData.image}</Link>
<div style={navStyles.linkContainer}></div>
        </nav>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px' }}>
        <Routes>
        
          <Route path="/" element={<Homepage userData={userData}/>} />
          <Route path="/AboutUs" element={<Aboutus userData={userData}/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Login" element={<Login  setUserData={setUserData} />} />
          <Route path="/Dashboard" element={<Dashboard userData={userData}/>} />
          <Route path="/ProfileUser" element={<ProfileUser    userData={userData}/>} />
          <Route path="/ProfileAdmin" element={<ProfileAdmin    userData={userData}/>} />
          <Route path="/ProfileSeller" element={<ProfileSeller    userData={userData}/>} />
          <Route path="/Checkout" element={<Checkout userData={userData}/>} />


        </Routes>
        </div>
      </Router>
     </GradientBackground>
  );
}



export default App;
