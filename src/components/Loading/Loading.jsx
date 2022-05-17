import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className='loading__wrapper'>
      <div className='loading__container'>
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
