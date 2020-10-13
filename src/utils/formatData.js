import moment from 'moment';
import 'moment/locale/pl';

export const handleLocationData = (locInfo) => {
  const city = locInfo.split(',', 1).toString();
  const aside = locInfo.replace(`${city}, `, '');

  const location = {
    city,
    aside,
  };

  return location;
};

export const getDate = (date) => {
  moment.locale('pl');
  return moment(date).format('LLL');
};
