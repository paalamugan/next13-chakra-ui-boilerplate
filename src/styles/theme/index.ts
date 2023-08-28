import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import { CardComponent } from './additions/card/Card';
import { PanelContainerComponent } from './additions/layout/PanelContainer';
import { components } from './components';
import { foundations } from './foundations';
import { globalStyles } from './styles';

const config = {
  initialColorMode: 'light',
};

const fonts = {
  heading: 'var(--font-inter)',
  body: 'var(--font-inter)',
};

export const theme = extendTheme(
  {
    fonts,
    config,
    ...foundations,
    components,
  },
  withDefaultColorScheme({ colorScheme: 'primary' }),
  globalStyles,
  CardComponent,
  PanelContainerComponent
);
