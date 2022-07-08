import { DEFAULT_NAVIGATION_OPTIONS } from '@constants/navigation';
import { MainRoutes } from '@interfaces/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import ChallengeScreen from '@screens/Challenge';
import HomeScreen from '@screens/Home';
import SummaryScreen from '@screens/Summary';
import React, { FC } from 'react';

const Stack = createStackNavigator();

const MainStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_NAVIGATION_OPTIONS}>
      <Stack.Screen component={HomeScreen} name={MainRoutes.Home} />
      <Stack.Screen component={ChallengeScreen} name={MainRoutes.Challenge} />
      <Stack.Screen component={SummaryScreen} name={MainRoutes.Summary} />
    </Stack.Navigator>
  );
};

export default MainStack;
