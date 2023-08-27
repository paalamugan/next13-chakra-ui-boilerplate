import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  primary: {
    50: '#e6f6ff',
    100: '#b3e0ff',
    200: '#80cbff',
    300: '#4db5ff',
    400: '#1a9fff',
    500: '#0086e6',
    600: '#0066b3',
    700: '#004680',
    800: '#00264d',
    900: '#00071a',
  },
  navy: {
    50: '#d0dcfb',
    100: '#aac0fe',
    200: '#a3b9f8',
    300: '#728fea',
    400: '#3652ba',
    500: '#1b3bbb',
    600: '#24388a',
    700: '#1b254b',
    800: '#111c44',
    900: '#0b1437',
  },
};

/** override chakra colors here */
const overriddenChakraColors: DeepPartial<Theme['colors']> = {};

const colors = {
  ...overriddenChakraColors,
  ...extendedColors,
};

export default colors;
