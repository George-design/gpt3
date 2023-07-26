import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => (
  <div id='feature'>
    <div className='feature-title'>
      <div className='color' />
      <h1>{title}</h1>
    </div>
    <div></div>
    <div className='feature-text'>
      <h1>{text}</h1>
    </div>
  </div>
);

export default Feature;
