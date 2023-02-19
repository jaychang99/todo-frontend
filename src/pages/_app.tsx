import { CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { globalStyles } from 'styles/globalStyles';
import { queryClient } from 'api/reactQuery';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={globalStyles}>
        <CssBaseline />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
