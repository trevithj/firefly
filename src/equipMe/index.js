/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useStore } from '../store';
import './css/animate.css';
import './css/normalize.css';
// import './css/styles.css'; //need to install fonts for this to work

import Nav from './nav';
import Notification from './Notification';
import HeroSection from './heroSection';
import Footer from './Footer';
import { s2o } from './helpers';

const Main = () => {
  // const [name, setName] = useState('Hannah McQueen');
  // const [state, dispatch] = useStore();
  const [state] = useStore();
  const name = state.name || 'Hannah McQueen';
  const notifyText =
    state.notifyText ||
    'EquipMe is now on tour, to see if we are coming to your school click here';
  // console.log(state);
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
        <Notification notifyText={notifyText} />
        <Nav />
      </header>
      <main
        id='fullpage'
        className='fullpage-wrapper'
        style={s2o('height: 100%; position: relative;')}
      >
        <HeroSection name={name} />
        <Footer />
      </main>
    </div>
  );
};

export default Main;
