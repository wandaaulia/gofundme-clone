import React from 'react';
import './getstarted.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';
import flower from '../../assets/flower.png';

const GetStarted = () => {
  return (
    <div className='getstarted'>

      <div className='getstarted-right'>
        <img src={flower} alt='flower' />
      </div>

      <div className='getstarted-left'>
        <h2> Ready to get started? Join thousands of others today. </h2>
        <div className='button-group'>
        <button type='button' className='start-fund'> Start a GoFundMe </button>
        <div className='how-button'>
          <div> <p> How it works   </p> </div>
          <div className='arrow'> <MdKeyboardArrowRight /> </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
