import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';

import MainStack from './stacks/MainStack';

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
