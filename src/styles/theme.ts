import { AppTheme } from '../types';

export const fonts = {
  title: "'Playfair Display', serif",
  ui: "'Barlow', sans-serif",
};

export const breakpoints = {
  tablet: '900px',
};

// Relaciones de contraste (WCAG AA: 4.5:1 en texto normal, 3:1 en texto grande y componentes).
// Claro:  text/bg 18.9 · text/card 17.2 · muted/card 6.8 · onPrimary/primary 5.7 ·
//         link/card 5.1 · border/bg 4.5 · danger/card 5.9 · success/card 5.7
// Oscuro: text/bg 16.6 · text/card 14.8 · muted/card 8.1 · link/card 6.0 ·
//         border/inputBg 5.1 · danger/card 7.3 · success/card 9.8
export const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    bg: '#ffffff',
    text: '#111111',
    muted: '#555555',
    card: '#f4f4f4',
    border: '#767676',
    primary: '#CC1818',
    primaryHover: '#A81313',
    onPrimary: '#ffffff',
    headerBg: '#CC1818',
    onHeader: '#ffffff',
    link: '#CC1818',
    focus: '#005fcc',
    inputBg: '#ffffff',
    danger: '#b3261e',
    dangerText: '#7a1010',
    dangerBg: '#fdeaea',
    success: '#1b6e30',
    successText: '#14532d',
    successBg: '#e6f4ea',
    footerBg: '#111111',
    onFooter: '#ffffff',
  },
  fonts,
  breakpoints,
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: {
    bg: '#121212',
    text: '#f1f1f1',
    muted: '#b5b5b5',
    card: '#1e1e1e',
    border: '#9a9a9a',
    primary: '#CC1818',
    primaryHover: '#A81313',
    onPrimary: '#ffffff',
    headerBg: '#1e1e1e',
    onHeader: '#ffffff',
    link: '#FF6B6B',
    focus: '#7ab7ff',
    inputBg: '#2a2a2a',
    danger: '#ff8a80',
    dangerText: '#ffd0cc',
    dangerBg: '#3a1512',
    success: '#6fdc8c',
    successText: '#b7f0c6',
    successBg: '#12301a',
    footerBg: '#000000',
    onFooter: '#f1f1f1',
  },
  fonts,
  breakpoints,
};
