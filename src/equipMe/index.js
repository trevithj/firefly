/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './css/animate.css';
import './css/normalize.css';
// import './css/styles.css'; //need to install fonts for this to work

import {
  NavSectionMenu,
  MobileMenuMain,
  MobileMenuSocial,
  NavSectionAvatar
} from './Menus';
import HeroSection from './HeroSection';
import Footer from './Footer';
import { s2o } from './helpers';

const Main = () => {
  return (
    <div
      data-features='dashboard'
      className='fp-viewing-anchor-get'
      style={{ overflow: 'visible', height: 'initial' }}
    >
      <header
        className='header-container'
        id='header-nav'
        style={{ top: '0px' }}
      >
        <div className='notification-container'>
          <a
            href='https://equipmenow.com'
            className='notification-link'
            target='_blank'
          >
            EquipMe is now on tour, to see if we are coming to your school click
            here
          </a>
        </div>
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
      </header>
      <main
        id='fullpage'
        className='fullpage-wrapper'
        style={s2o('height: 100%; position: relative;')}
      >
        <HeroSection />
        <Footer />
      </main>
    </div>
  );
};

export default Main;
