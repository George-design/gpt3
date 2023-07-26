import React from "react";
import "./navbar.css";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className='navbar-image'>
        <img src={logo} />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>What Is GPT3?</li>
          <li>Open AI</li>
          <li>Case Studies</li>
          <li>Library</li>
        </ul>
      </nav>
      <div className='login'>
        <input type='text' value='Sign In' />
        <input type='text' value='Sign Up' />
      </div>
    </div>
  );
};

export default Navbar;
