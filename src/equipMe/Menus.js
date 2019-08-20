/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const NavSectionMenu = () => (
  <ul className='nav_section_menu'>
    <li className='nav_section_item nav_section_item--logo'>
      <a href='index-scroll.html' className='nav__logo_link '>
        <img
          alt='equip me home button logo'
          className='nav__logo'
          src='https://tffg.github.io/equipme-platform-ui/images/logo.png'
        />
      </a>
    </li>
    <li className='nav_section_item '>
      <a className='nav__link' href='#anchor-coaching'>
        &nbsp;
      </a>
    </li>
  </ul>
);

export const MobileMenuMain = () => (
  <ul className='nav_section_menu nav_section_menu--main'>
    <li
      className='nav_section_item nav_section_item--push'
      data-menuanchor='anchor-coaching'
    >
      <a className='nav__link' href='#anchor-coaching'>
        Coaching
      </a>
    </li>
    <li className='nav_section_item' data-menuanchor='anchor-me'>
      <a className='nav__link' href='#anchor-me'>
        Me
      </a>
    </li>
    <li className='nav_section_item' data-menuanchor='anchor-go'>
      <a className='nav__link' href='#anchor-go'>
        Go
      </a>
    </li>
    <li className='nav_section_item active' data-menuanchor='anchor-get'>
      <a className='nav__link' href='#anchor-get'>
        Get
      </a>
    </li>
    <li className='nav_section_item nav_section_item--mobile'>
      <a className='nav__link' href='#'>
        My Profile
      </a>
    </li>
    <li className='nav_section_item nav_section_item--mobile'>
      <a className='nav__link' href='#'>
        Sign Out
      </a>
    </li>
  </ul>
);

export const MobileMenuSocial = () => (
  <ul className='nav_section_menu--social'>
    <li className='nav_section_header'>Connect with us</li>
    <li>
      <ul className='social_icons'>
        <li className='social_icon'>
          <a href='#'> </a>
        </li>
        <li className='social_icon'>
          <a href='#'> </a>
        </li>
        <li className='social_icon'>
          <a href='#'> </a>
        </li>
        <li className='social_icon'>
          <a href='#'> </a>
        </li>
      </ul>
    </li>
  </ul>
);

export const NavSectionAvatar = () => (
  <ul className='nav_section_menu'>
    <li className='nav_section_item nav_section_item--avatar'>
      <a href='#' className='nav__avatar'>
        <span className='nav__avatar_text'>HM</span>
      </a>
    </li>
    <li className='nav_section_item nav_section_item--menu'>
      <button type='button' className='nav__menu_btn'>
        <div className='hamburger hamburger--squeeze js-hamburger'>
          <div className='hamburger-box'>
            <div className='hamburger-inner' />
          </div>
        </div>
      </button>
    </li>
  </ul>
);
