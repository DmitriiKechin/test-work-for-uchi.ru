/// <reference types="react-scripts" />

import 'styled-components';
import { theme } from './DefaultTheme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accent: string;
      dark: string;
      light: string;
      gray: string;
      Primary: string;
      background: string;
    };
  }
}
