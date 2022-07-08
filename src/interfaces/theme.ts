import { ComponentType, ReactElement } from 'react';

interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  success: string;
  error: string;
}

interface ThemeSpaces {
  paddingScreen: number;
}

export interface Theme {
  color: ThemeColors;
  spaces: ThemeSpaces;
}

export type CustomThemeProvider = ComponentType<{
  theme?: Theme | undefined;
  children?: ReactElement;
}>;
