import React from 'react';
import { MdViewHeadline, MdSearch } from 'react-icons/md';
import { useGLobalContext } from '../../contextApp';
import './navbar.scss';

const Navbar = () => {
  const { openMenu } = useGLobalContext();

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='menu-bar' onClick={openMenu} aria-hidden='true'>
          <MdViewHeadline />
        </div>
        <div className='text-navbar'>
          Personal Travel Blog
        </div>
        <div>
          <MdSearch />
        </div>
        <div className='content-navbar'>
          <h3 className='text-navbar'> When Is The Best Time of Year To Visit Japan ? </h3>
          <p className='text-caption-navbar'> The good news for travelers </p>
          <button className='button-navbar' type='button'> Read more </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
