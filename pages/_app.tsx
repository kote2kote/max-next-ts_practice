import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '../styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
