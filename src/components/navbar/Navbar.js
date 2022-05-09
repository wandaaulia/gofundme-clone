import React from 'react';
import { MdViewHeadline, MdSearch } from 'react-icons/md';
import { BsChevronDown } from "react-icons/bs";
import logo from '../../assets/gofundme.svg';
import './navbar.scss';
import { useGLobalContext } from '../../contextApp';

const Navbar = () => {

  const { isMenuOpen, openMenu} = useGLobalContext();

  if(isMenuOpen) {
    console.log(isMenuOpen);
  }

  return (
    <div className='container-navbar'>
      <div className='navbar-left'> 
      <MdSearch size={28} className='menu-search'/>
      <ul className='navbar-left-menu'> 
        <li> Search </li>   
        <li> For individuals <BsChevronDown className='arrow-down'/> </li>
        <li> For charities</li>
      </ul>
      </div>
      <div className='img-logo'> <img src={logo} alt='logo' /> </div>
      <div className='navbar-right'>
       <MdViewHeadline size={28} className='bar' onClick={openMenu}/>
        <ul className='navbar-right-menu'> 
          <li> How it works </li>
          <li> Sign In </li>
          <li> 
          <button type='button'> Start a GoFundMe </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
