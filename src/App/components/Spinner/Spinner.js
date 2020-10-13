import React from 'react';

import spinner from '../../../assets/spinner.gif';
import './Spinner.sass';

const Spinner = () => (
  <div className='layer--wrapper'>
    <img src={spinner} alt='loading...' className='spinner--img' />
  </div>
);

export default Spinner;
