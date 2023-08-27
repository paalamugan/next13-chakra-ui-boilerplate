'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, cookieStorageManager } from '@chakra-ui/react';
import type { FC } from 'react';

import theme from '@/styles/theme';

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} colorModeManager={cookieStorageManager}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};
