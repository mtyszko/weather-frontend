import React from 'react';

import NavBar from './NavBar';
import '../../App.sass';

export default {
  title: 'Modules/Nav Bar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Main = Template.bind({});
Main.args = {};
