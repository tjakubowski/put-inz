export type ThemeType = typeof theme;

export const theme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  colors: {
    primary: '#0D53FC',
    secondary: '#2e2e2e',
    default: '#d0d0d0',
    error: '#d72222',
  },
  fontSize: {
    sm: '1.2rem',
    md: '1.4rem',
    lg: '1.8rem',
    xl: '2.2rem',
  },
};

export default theme;
