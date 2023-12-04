import React from 'react'
import { useState } from "react";
import AllProducts from "./Allproducts";




const Homepage = ({userData}) => {
  




  return (
  
 <div>
   <div>{userData.id}</div>
      <AllProducts />


    </div>
    
  )
}

export default Homepage