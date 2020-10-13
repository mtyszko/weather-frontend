import React from 'react';

import SearchBar from './SearchBar';
import '../../App.sass';

export default {
  title: 'Modules/Search Bar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Main = Template.bind({});
Main.args = {};
