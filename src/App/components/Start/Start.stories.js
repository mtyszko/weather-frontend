import React from 'react';

import Start from './Start';
import '../../App.sass';

export default {
  title: 'Modules/Start',
  component: Start,
};

const Template = (args) => <Start {...args} />;

export const Main = Template.bind({});
Main.args = {
  error: 'wyszukaj lokalizację',
};
