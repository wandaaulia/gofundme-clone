import React from 'react';
import './footer.scss';
import {
  FaFacebookSquare, FaYoutube, FaTwitter, FaInstagram,
} from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { RiMicFill } from 'react-icons/ri';
import logo from '../../assets/gofundme.svg';
import playStore from '../../assets/playStore.png';
import appStore from '../../assets/appleStore.png';

const Footer = () => {
  return (
    <footer>
      <div className='footer-top'>
        <div className='logo-footer'> <img src={logo} alt='gofundme' /> </div>
        <div className='fundraiser-footer'>
          <p> Fundraise for </p>
          <ul>
            <li> Medical </li>
            <li> Emergency  </li>
            <li> Memorial  </li>
            <li> Education  </li>
            <li> Nonprofit  </li>
            <li> Support COVID-19 fundraisers </li>
          </ul>
        </div>
        <div className='learn-footer'>
          <p> Learn more </p>
          <ul>
            <li> How GoFundMe Works </li>
            <li> Why GoFundMe  </li>
            <li> Success stories  </li>
            <li> Supported countries  </li>
            <li> Charity fundraising  </li>
            <li> Pricing </li>
          </ul>
        </div>
        <div className='resources-footer'>
          <p> Resources </p>
          <ul>
            <li> Help center </li>
            <li> Blog  </li>
            <li> GoFundMe Stories  </li>
            <li> Press center  </li>
            <li> Careers  </li>
            <li> About </li>
            <li> More resources </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-1'>
          <button className='button-footer' type='button'> 
          <p className='btn-us'> United States </p>
          <div className='titik'>  </div>
          <p className='btn-eng'> English </p>
          </button>
          <div className='logo-socialmedia'>
            <FaFacebookSquare className='icon-socialmedia'/>
            <FaYoutube className='icon-socialmedia'/>
            <FaTwitter className='icon-socialmedia'/>
            <FaInstagram className='icon-socialmedia'/>
            <BsMedium className='icon-socialmedia'/>
            <RiMicFill className='icon-socialmedia'/>
          </div>
        </div>
        <div className='footer-bottom-2'>
          <div className='img-store'>
            <img src={playStore} alt='playstore' />
            <img src={appStore} alt='appstore' />
          </div>
          <div className='list-info-footer'>
            <p> © 2010-2022 GoFundMe </p>
            <ul>
              <li> Terms </li>
              <li> Privacy </li>
              <li> Legal </li>
            </ul>
            <ul className='last-ul'> 
            <li> Accessibility Statement </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
