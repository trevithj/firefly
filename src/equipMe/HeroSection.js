/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { s2o } from './helpers';

const Main = ({ name }) => {
  const na = name.split(' ');
  return (
    <section
      className='section gradient_1 section--hero fp-section'
      id='section1'
      data-anchor='anchor-hero'
      data-fp-styles='null'
      style={s2o('height: 758px;')}
    >
      <div className='container container--align'>
        <div className='progress-bar progress-bar--hero'>
          <div className='progress-bar__line'>
            <div className='progress-bar__line progress-bar__line--fill-alt' />
          </div>
          <div className='progress-bar__info'>
            <p>
              <strong className='strongest'>Module Progress: 62%</strong>
            </p>
            <p>Course ends: 07 Jan 2019</p>
          </div>
        </div>
        <div className='section__contents'>
          <h1 className='hero_heading--primary'>
            Kia Ora {na[0]},
            <br />
            welcome to EquipMe.
          </h1>
          <h2 className='hero_heading--secondary'>
            This is your dashboard, the hub for your lessons and coaching. You
            will have one live video coaching session for each of our three
            levels: Me, Go and Get. Please book at least a few days in advance.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Main;
