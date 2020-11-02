import React from 'react';

import MainInfo from './MainInfo';
import '../../App.sass';

export default {
  title: 'Modules/Main Info',
  component: MainInfo,
};

const Template = (args) => <MainInfo {...args} />;

export const Main = Template.bind({});
Main.args = {};
