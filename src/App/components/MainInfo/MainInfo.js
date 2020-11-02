import React, { Component } from 'react';
import propTypes from 'prop-types';

import './MainInfo.sass';

const MainInfo = () => (
  <section className={`info__wrapper`}>
    <div className={`info__main`}>
      <img src='' alt='' className={`info__map`} />
      <div className={`info__main`}>
        <div className={`info__panel`}>
          <div className={`info__minmax`}>min|max</div>
          <div className={`info__current__temp`}>23</div>
          <div className={`info__feelslike`}>odczuwalna </div>
        </div>
        <div className={`info__pin`}>ikona</div>
      </div>
    </div>
    <div className={`info__details`}>
      <div className={`info__icon`}>tu ikona</div>
      <div className={`info__description__container`}>
        <div className={`info__description`}>descr</div>
        <div className={`info__pressure`}>pressure</div>
      </div>
      <div className={`info__precip__container`}>
        <div className={`info__rain`}>
          <div className={`info__small__icon`}>ikona</div>
          <div className={`info__small__value`}>wartość</div>
        </div>
      </div>
    </div>
  </section>
);

export default MainInfo;

// `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lon},${lat},14/893x341?access_token=${tutaj_api_key_mapboxa}&logo=false`
//
