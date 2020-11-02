import React from 'react';
import propTypes from 'prop-types';

import './LocationInfo.sass';

const LocationInfo = ({ mainInfo, regionInfo, date }) => {
  return (
    <section className={`location__wrapper`}>
      <div className={`location__info`}>
        <div className={`main__info`}>{mainInfo}</div>
        <div className={`region__info`}>{regionInfo}</div>
      </div>
      <div className={`date__info`}>{date} </div>
    </section>
  );
};

LocationInfo.propTypes = {
  mainInfo: propTypes.string.isRequired,
  regionInfo: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

export default LocationInfo;
