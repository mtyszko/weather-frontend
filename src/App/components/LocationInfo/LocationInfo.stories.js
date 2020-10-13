import React from 'react';

import LocationInfo from './LocationInfo';
import '../../App.sass';

export default {
  title: 'Modules/Location Info',
  component: LocationInfo,
};

const Template = (args) => <LocationInfo {...args} />;

export const Main = Template.bind({});
Main.args = {
  city: 'Legionowo',
  aside: 'powiat legionowski, woj. mazowieckie, Polska',
  date: '6 marca 2019 14:00',
};
