import moment from 'moment';
import 'moment/locale/pl';

export const handleQuery = (userQuery) => {
  const pattern = /^[\w&.]*$/;

  const query = userQuery
    .split(' ')[0]
    .split('')
    .filter((item) => item.match(pattern))
    .join('')
    .toLowerCase();

  return query;
};

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
