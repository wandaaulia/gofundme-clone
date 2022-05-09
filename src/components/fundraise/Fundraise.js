import React from 'react';
import './fundraise.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsArrowRightCircle } from 'react-icons/bs';
import imgYour from '../../assets/s_yourself.png';
import imgFriends from '../../assets/s_friends.png';
import imgCharity from '../../assets/s_charity.png';

const Fundraise = () => {
  return (
    <div className='fundraise'>

      <div className='fundraise-top'>
        <p className='info-fundraise'> Make your impact </p>
        <h2 className='title-fundraise'> Fundraise for... </h2>
      </div>

      <div className='fundraise-bottom'>
        <div className='fundraise-for'>
          <div className='img-fundraise-for'>
            <img src={imgYour} alt='yourself' />
          </div>
          <div className='info-fundraise-for'>
            <p> Yourself </p>
          </div>
          <div className='icon-fundraise-for'>
            <MdKeyboardArrowRight className='icon-mobile-for'/>
            <BsArrowRightCircle className='icon-wide-for'/>
          </div>
        </div>
        <div className='fundraise-for'>
          <div className='img-fundraise-for'>
            <img src={imgFriends} alt='yourself' />
          </div>
          <div className='info-fundraise-for'>
            <p> Friends & family </p>
          </div>
          <div className='icon-fundraise-for'>
            <MdKeyboardArrowRight className='icon-mobile-for'/>
            <BsArrowRightCircle className='icon-wide-for'/>
          </div>
        </div>
        <div className='fundraise-for'>
          <div className='img-fundraise-for'>
            <img src={imgCharity} alt='yourself' />
          </div>
          <div className='info-fundraise-for'>
            <p> Charity </p>
          </div>
          <div className='icon-fundraise-for'>
            <MdKeyboardArrowRight className='icon-mobile-for'/>
            <BsArrowRightCircle className='icon-wide-for'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundraise;
