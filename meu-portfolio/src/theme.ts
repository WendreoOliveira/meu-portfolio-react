import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#454545',
    },
    secondary: {
      main: '#271394'
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  }
});

theme = responsiveFontSizes(theme);
export default theme;