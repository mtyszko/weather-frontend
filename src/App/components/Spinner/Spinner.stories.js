import React from 'react';

import Spinner from './Spinner';
import '../../App.sass';

export default {
  title: 'Modules/Loading',
  component: Spinner,
};

const Template = () => <Spinner />;

export const Main = Template.bind({});
