/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './css/animate.css';
import './css/normalize.css';

const Notification = ({ notifyText }) => {
  return (
    <div className='notification-container'>
      <a
        href='https://equipmenow.com'
        className='notification-link'
        target='_blank'
      >
        {notifyText}
      </a>
    </div>
  );
};

export default React.memo(Notification);
