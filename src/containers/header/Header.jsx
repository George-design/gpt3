import React from "react";
import "./header.css";
import people from "../../images/people.png";
import ai from "../../images/ai.png";

const Header = () => {
  return (
    <div id='header'>
      <div className='header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <input type='email' value='Your Email Address' id='email' />
        <input type='button' value='Get Started' id='btn' />
        <div className='header-footer'>
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='header-image'>
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
