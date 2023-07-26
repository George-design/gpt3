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
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>What Is GPT3?</a>
          </li>
          <li>
            <a href='#'>Open AI</a>
          </li>
          <li>
            <a href='#'>Case Studies</a>
          </li>
          <li>
            <a href='#'>Library</a>
          </li>
        </ul>
      </nav>
      <div className='login'>
        <input type='text' value='Sign In' id='sign-in' />
        <input type='text' value='Sign Up' id='sign-out' />
      </div>
    </div>
  );
};

export default Navbar;
