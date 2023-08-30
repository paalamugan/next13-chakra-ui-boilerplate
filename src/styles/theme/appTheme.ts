import { extendTheme } from '@chakra-ui/react';

import { inter } from '@/fonts';

import { theme } from '.';

export const appTheme = extendTheme(theme, {
  fonts: {
    body: inter.style.fontFamily,
    heading: inter.style.fontFamily,
  },
});
