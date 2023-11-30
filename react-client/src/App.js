import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Switch, Route,Link,Routes} from "react-router-dom"
import signup from './components/signup';

// import Signup from "./components/Signup";

import './App.css';

function App() {
  return (
    <Router>

    <Routes>


      <Route path="/" element={<signup/>} />
      
      {/* <Route path="/Login" element={<Login  setUserData={setUserData} />} /> */}




    </Routes>

  </Router>
  )
}

export default App;
