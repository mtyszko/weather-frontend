import React from 'react';
import propTypes from 'prop-types';

import './LocationInfo.sass';

const LocationInfo = ({ city, aside, date }) => {
  return (
    <section className='location--wrapper'>
      <div className='location--info'>
        <div className='main--info'>{city}</div>
        <div className='aside--info'>{aside}</div>{' '}
      </div>
      <div className='date--info'>{date} 6 marca 2019 14:00</div>
    </section>
  );
};

LocationInfo.propTypes = {
  city: propTypes.string,
  aside: propTypes.string,
  date: propTypes.string,
};

LocationInfo.defaultProps = {
  city: 'Legionowo',
  aside: 'powiat legionowski, woj. mazowieckie, Polska',
  date: '6 marca 2019 14:00',
};

export default LocationInfo;
