import React from 'react';
import './menuActive.scss';
import { MdOutlineClose, MdSearch } from 'react-icons/md';
import { useGLobalContext } from '../../contextApp';

const MenuActive = () => {
  const { closeMenu } = useGLobalContext();
  return (
    <div className='container-menu'>
      <div className='menu-active'>
        <div className='icon-menu'>
          <div onClick={closeMenu} aria-hidden='true'>
            <MdOutlineClose />
          </div>
          <div> Personal Travel Blog </div>
          <div>
            <MdSearch />
          </div>
        </div>
        <ul className='content-menu'>
          <li>Home </li>
          <li> About Us </li>
          <li> Categories </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuActive;
