import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { globalStyles } from 'styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={globalStyles}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
