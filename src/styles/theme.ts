import { AppTheme } from '../types';

export const fonts = {
  title: "'Playfair Display', serif",
  ui: "'Barlow', sans-serif",
};

export const breakpoints = {
  tablet: '900px',
};

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    bg: '#ffffff',
    text: '#111111',
    accent: '#ED1E1E',
    card: '#f4f4f4',
  },
  fonts,
  breakpoints,
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: {
    bg: '#121212',
    text: '#f1f1f1',
    accent: '#1e1e1e',
    card: '#1e1e1e',
  },
  fonts,
  breakpoints,
};
