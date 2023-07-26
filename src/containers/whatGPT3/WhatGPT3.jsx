import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div id='whatGPT3'>
      <div className='whatGPT3-header'>
        <Feature
          title='What is GPT-3'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
        />
      </div>
      <div className='whatGPT3-center'>
        <h1 className='gradient__text'>
          The possibilities are beyond
          <br /> your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className='whatGPT3-footer'>
        <Feature
          title='Chatbots'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
        />
        <Feature
          title='Knowledgebase'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
        <Feature
          title='Education'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
