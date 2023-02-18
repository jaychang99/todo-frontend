import { CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import type { AppProps } from 'next/app';
import { globalStyles } from 'styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={globalStyles}>
      <CssBaseline />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
