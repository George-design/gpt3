import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <div id='cta'>
      <div className='cta-left'>
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className='cta-right'>
        <button type='button'>Get Started</button>
      </div>
    </div>
  );
};

export default Cta;
