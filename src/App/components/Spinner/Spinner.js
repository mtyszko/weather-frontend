import React from 'react';

import spinner from '../../../assets/spinner.gif';
import './Spinner.sass';

const Spinner = () => (
  <aside className='layer--wrapper'>
    <img src={spinner} alt='loading...' className='spinner--img' />
  </aside>
);

export default Spinner;
