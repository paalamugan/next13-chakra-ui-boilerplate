'use client';

import { ChakraProvider, cookieStorageManager } from '@chakra-ui/react';
import type { FC } from 'react';

import { appTheme } from '@/styles/theme/appTheme';

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ChakraProvider theme={appTheme} colorModeManager={cookieStorageManager}>
      {children}
    </ChakraProvider>
  );
};
