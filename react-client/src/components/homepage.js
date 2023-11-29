import React from 'react'
import { useEffect, useState } from "react";
import AllProducts from "./Allproducts";
import axios from 'axios'




const Homepage = ({userData}) => {
  

  console.log();


  return (
  
 <div>
      <h4>Homepage</h4>
     
      <AllProducts />


    </div>
    
  )
}

export default Homepage