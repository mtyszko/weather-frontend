import moment from 'moment';
import 'moment/locale/pl';

export const handleLocationData = (locInfo) => {
  const { location, lat, lon } = locInfo;

  const mainInfo = location.split(',', 1).toString();
  const regionInfo = location.replace(`${mainInfo}, `, '');
  const latitude = lat;
  const longitude = lon;

  const locationObject = {
    mainInfo,
    regionInfo,
    latitude,
    longitude,
  };

  return locationObject;
};

export const getCurrentDate = (dateData) => {
  moment.locale('pl');

  const date = moment.unix(dateData).format('LLL');

  return date;
};

export const handleForecastData = (forecastdata) => {
  const { current, daily, hourly } = forecastdata;

  const forecast = {
    current,
    daily,
    hourly,
  };

  return forecast;
};
