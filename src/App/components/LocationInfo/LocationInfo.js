import React from 'react';
import propTypes from 'prop-types';

import './LocationInfo.sass';

const LocationInfo = ({ mainInfo, regionInfo, date }) => {
  return (
    <section className='location--wrapper'>
      <div className='location--info'>
        <div className='main--info'>{mainInfo}</div>
        <div className='region--info'>{regionInfo}</div>{' '}
      </div>
      <div className='date--info'>{date} </div>
    </section>
  );
};

LocationInfo.propTypes = {
  mainInfo: propTypes.string.isRequired,
  regionInfo: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

export default LocationInfo;
