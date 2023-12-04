
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { useState } from "react";
import Homepage from './components/Homepage';
import Aboutus from './components/Aboutus';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import ProfileUser from './components/ProfileUser';
import ProfileAdmin from './components/ProfileAdmin';
import ProfileSeller from './components/ProfileSeller';
import Productdetail from './components/Productdetail'
import Card from './components/Card'
import Checkout from './components/Checkout';
import Search from './components/Search';
import Logo from './components/Logo';
import { commonStyles,navStyles,linkHome } from "./components/styles";
import Box from '@mui/material/Box';
import { styled,createTheme, ThemeProvider } from '@mui/system';


const GradientBackground = styled(Box)(({ theme }) => ({
  ...commonStyles.gradientBackground,
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#984D38",
    },
    secondary: {
      main: "#181E41",
    },
  },
});




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
          
         
          <Link to="/AboutUs" style={navStyles.linkAboutus}>AboutUs</Link>
          
         
          {userData && userData.email ? (
              <>
           
              
            <Link to="/Checkout" style={navStyles.linkProfile}>Checkout</Link> 
            <Link to="/Profile" style={navStyles.linkProfile}>Profile</Link> 
            <Link to="/Login" style={navStyles.linkAboutus}>Logout</Link> 
            </>

          ) : (

            <Link to="/Login" style={navStyles.linkAboutus}>Login</Link>

          )}
          <div style={navStyles.linkContainer}></div>
        </nav>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Homepage userData={userData} />} />
            <Route path="/AboutUs" element={<Aboutus userData={userData} />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login setUserData={setUserData} />} />
            <Route path="/Dashboard" element={<Dashboard userData={userData} />} />
            <Route path="/Checkout" element={<Checkout userData={userData} />} />
            <Route
              path="/Profile"
              element={
                userData.role === 'admin' ? (
                  <ProfileAdmin userData={userData} />
                ) : userData.role === 'seller' ? (
                  <ProfileSeller userData={userData} />
                ) : (
                  <ProfileUser userData={userData} />
                )
              }
            />
                        <Route path="/product/:productId" element={<Productdetail  userData={userData} />} />
                        <Route path="/Card" element={<Card   userData={userData}/>} />

          </Routes>
        </div>
      </Router>
    </GradientBackground>
  );
}

export default App;