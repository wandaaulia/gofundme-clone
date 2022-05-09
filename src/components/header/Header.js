/* eslint-disable jsx-quotes */
import React from 'react';
import image from '../../assets/kids.jpg';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <div>
          <h2> A place for you </h2>
        </div>
        <button type='button'>  Start a GoFundMe </button>
      </div>
      <div className='header-right'>
        <img src={image} alt='img-header' />
      </div>
    </div>
  );
};

export default Header;
