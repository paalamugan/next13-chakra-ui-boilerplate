import '@/styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { inter } from '@/fonts';
import { theme } from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>
      {`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
      `}
    </style>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default MyApp;
