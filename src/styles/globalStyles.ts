import { createTheme } from '@mui/material';

export const globalStyles = createTheme({
  typography: {
    fontFamily: 'Pretendard, Roboto, Helvetica, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Pretendard';
          font-style: normal;
          font-weight: 400;
          src: local('Pretendard'), local('Pretendard-Regular'), url('/fonts/Pretendard-Regular.woff2) format('woff2');
        }
      `,
    },
  },
});
