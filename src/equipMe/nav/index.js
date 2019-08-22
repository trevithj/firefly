/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  NavSectionMenu,
  MobileMenuMain,
  MobileMenuSocial,
  NavSectionAvatar
} from './Menus';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav__menu' id='anchor-menu'>
          <li className='nav_section'>
            <NavSectionMenu />
          </li>
          <li className='nav_section mobile__menu'>
            <MobileMenuMain />
            <MobileMenuSocial />
          </li>
          <li className='nav_section'>
            <NavSectionAvatar />
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
