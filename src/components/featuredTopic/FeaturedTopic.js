import React from 'react';
import './featuretopic.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';

const FeaturedTopic = () => {
  return (
    <div className='feature'>

      <div className='feature-top'>
        <p className='info-feature'> Where you can help </p>
        <h2 className='title-feature'> Featured topics </h2>
      </div>

      <div className='feature-bottom'>
        <div className='img-topic'>
          <p> Urgent Cause </p>
        </div>
        <div className='info-img'>
        <div className='info-img-content'>
          <p className='title-info-img'> Kansas tornado relief: how to help</p>
          <p className='text-info-img'> Donate to verified fundraisers to help individuals and families recover from the Andover, Kansas tornado.  </p>
        </div>
        <p className='button-help'> Help now <MdKeyboardArrowRight /> </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTopic;
