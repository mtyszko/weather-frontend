import React from 'react';

import './Start.sass';
import { MAPBOX_API_KEY as apiKey } from '../../../utils/utilsData';

const src = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/0,0,0,0/809x500?access_token=${apiKey}&logo=false`;

const Start = () => (
  <div className='start'>
    <img src={src} alt='mapa świata' className='start__img' />
  </div>
);

export default Start;

// `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/0,0,0,0/809x500?access_token=${tutaj_api_key_mapboxa}&logo=false`
//
