import React from 'react';
import './steps.scss';

const Step = () => {
  return (
    <div className='steps'>

      <div className='steps-left'>
        <p className='info-step'> What to expact </p>
        <h1 className='title-step'> Fundraising on GoFundMe takes just a few minutes </h1>
      </div>

      <div className='steps-right'>
        <ul className='list-steps'>
          <li className='content-step'>
            <div className='content-step-left'>
              <div className='circle-step'> 1 </div>
              <div className='img-svg'>
                <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><line className='linesvg' x1='49%' x2='49%' y1='0%' y2='100%' stroke='#333' strokeWidth='0.3' strokeDasharray='10,10' /></svg>
              </div>
              <div className='hr-img'>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              </div>
            </div>
            <div className='content-step-right'>
              <h3> Start with the basics </h3>
              <p> Kick things off with your name and location </p>
            </div>
          </li>
          <li className='content-step'>
            <div className='content-step-left'>
              <div className='circle-step'> 2 </div>
              <div className='img-svg'>
                <svg width='100%' height='100%' version="1.1" xmlns='http://www.w3.org/2000/svg'><line className='linesvg' x1='49%' x2='49%' y1='0%' y2='100%' stroke='#333' strokeWidth='0.3' strokeDasharray='10,10' /></svg>
              </div>
              <div className='hr-img'>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              <div className='rule'> </div>
              </div>
            </div>
            <div className='content-step-right'>
              <h3> Start with the basics </h3>
              <p> Kick things off with your name and location </p>
            </div>
          </li>
          <li className='content-step last'>
            <div className='content-step-left'>
              <div className='circle-step'> 3 </div>
              <div className='img-svg-3' />
            </div>
            <div className='content-step-right'>
              <h3> Start with the basics </h3>
              <p> Kick things off with your name and location </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Step;
