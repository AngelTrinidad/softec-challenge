import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FC } from 'react';

export enum MainRoutes {
  Home = 'Home',
  Challenge = 'Challenge',
  Summary = 'Summary',
}

export type MainStackList = {
  [MainRoutes.Home]: undefined;
  [MainRoutes.Challenge]: undefined;
  [MainRoutes.Summary]: undefined;
};

export type MainRoute<R extends keyof MainStackList> = RouteProp<MainStackList, R>;

export type MainScreen<R extends keyof MainStackList> = {
  route: MainRoute<R>;
  navigation: StackNavigationProp<MainStackList, R>;
};

export type ScreenComponent<R extends keyof MainStackList> = FC<MainScreen<R>>;
