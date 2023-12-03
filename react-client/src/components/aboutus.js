import React from 'react';
import {Link}  from "react-router-dom";
const Aboutus = () => {
  return (
    <div>


      <div>
      <Link to="/Aboutus">About Us</Link>
        <p>We are an RBK student, we are learning Website developpement.</p>
        <button>More +</button>
      </div>

      <div>
        <div>
          <p>2 weeks</p>
          <p>When We Started</p>
          <p>We started last windet in december 2022, we are studying remotly for a year now ...</p>
          <button>More +</button>
        </div>

        <div>
          <p>What WE DID</p>
          <p>We Created this website, that is</p>
          <button>More +</button>
        </div>
      </div>

        <div>
          <p>Our Makers</p>
          <p>Our Makers</p>
          <p>Our Makers</p>
          <p>Our Makers</p>
        </div>



    </div>
    
  );
};

export default Aboutus;
