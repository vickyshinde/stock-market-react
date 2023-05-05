import { createTheme } from '@mui/material/styles';

const defaultFont = 'Arial, Helvetica, sans-serif';
const rajdhaniFont = 'Rajdhani, Arial, sans-serif';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004E94'
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: rajdhaniFont,
    h1: {
      fontFamily: rajdhaniFont,
      fontWeight: 700,
      fontSize: '1.8rem',
      color: '#D80B22'
    },
    h2: {
      fontFamily: rajdhaniFont,
      fontWeight: 700,
      fontSize: '1.5rem'
    },
    h3: {
      fontFamily: rajdhaniFont,
      fontWeight: 700,
      fontSize: '1.3rem'
    },
    h4: {
      fontFamily: rajdhaniFont,
      fontWeight: 700,
      fontSize: '1rem'
    },
    h5: {
      fontFamily: defaultFont,
      fontWeight: 700,
      fontSize: '0.9rem'
    }
  },
  spacing: [0, 4, 8, 16, 32, 64],
  rajdhaniFont: {
    fontFamily: rajdhaniFont
  },
  logo: {
    fontFamily: rajdhaniFont,
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 700,
    color: '#ffffff',
    fontSize: '1rem'
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          // backgroundColor: '#000000',
          marginBottom: 40
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 42,
          minHeight: 42
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: rajdhaniFont,
          fontWeight: 600,
          fontSize: '0.9rem',
          textTransform: 'none'
        }
      }
    }
  }
});

export default theme;
