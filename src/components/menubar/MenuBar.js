import React from 'react';
import { MdClose, MdKeyboardArrowDown } from 'react-icons/md';
import img from '../../assets/gofundme.svg';
import { useGLobalContext } from '../../contextApp';

import './menubar.scss';

const MenuBar = () => {

    const {closeMenu} = useGLobalContext();

    return (
        <div className='menubar'>
            <div className='close-icon'>
             <MdClose onClick={closeMenu}/>
            </div>
            <div className='logo-menubar'>
             <img src={img} alt='logo' />
            </div>
            <div className='list-menubar'>
             <div className='item-menubar'>
                <p> Discover </p>
                <div className='icon-bar'> <MdKeyboardArrowDown /> </div>
            </div>
            <div className='item-menubar'>
                <p> Fundraise for </p>
                <div className='icon-bar'> <MdKeyboardArrowDown /> </div>
            </div>
            <div className='item-menubar'>
                <p> How it works </p>
                <div className='icon-bar'> <MdKeyboardArrowDown/> </div>
            </div>
            <div className='item-menubar'>
                <p> Resources </p>
                <div className='icon-bar'> <MdKeyboardArrowDown /> </div>
            </div>
            <div className='item-menubar'>
                <p> For Charities </p>
            </div>
            </div>
            <div className='button-menubar'>
                <button type='button' className='startbtn'> 
                <p> Start a GoFundMe  </p>
                </button> 
                <button type='button' className='signbtn'> 
               <p> Sign in  </p>
                </button> 
            </div>
        </div>
    )
}

export default MenuBar;