import { createTheming } from '@callstack/react-theme-provider';
import { CustomThemeProvider } from '@interfaces/theme';

import { DEFAULT_THEME } from './values/default';

const theme = createTheming(DEFAULT_THEME);

// Temporal fix for the possible type error on ThemeProvider from react-theme-provider.
export const ThemeProvider = theme.ThemeProvider as CustomThemeProvider;

export const useTheme = theme.useTheme;
