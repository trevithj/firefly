/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Main = () => {
  return (
    <footer className='page-footer'>
      <div className='container'>
        <a href='https://equipmenow.com' target='_blank'>
          ©2019 EquipMeNow
        </a>
        <a
          href='https://register.equipmenow.com/docs/equipme_now_terms_of_use.pdf'
          target='_blank'
        >
          Terms &amp; Conditions
        </a>
        <a
          href='https://register.equipmenow.com/docs/equipme_now_privacy_policy.pdf'
          target='_blank'
        >
          Privacy Policy
        </a>
        <a href='mailto:admin@equipmenow.com?subject=Email%20from%20EquipMe'>
          Support
        </a>
      </div>
    </footer>
  );
};

export default Main;
