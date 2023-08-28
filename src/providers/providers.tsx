'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, cookieStorageManager } from '@chakra-ui/react';
import type { FC } from 'react';

import { inter } from '@/fonts';
import { theme } from '@/styles/theme';

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme} colorModeManager={cookieStorageManager}>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </>
  );
};
