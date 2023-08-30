import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import { CardComponent } from './additions/card/Card';
import { PanelContainerComponent } from './additions/layout/PanelContainer';
import { components } from './components';
import { foundations } from './foundations';
import { globalStyles } from './styles';

const config = {
  initialColorMode: 'light',
};

export const theme = extendTheme(
  {
    config,
    ...foundations,
    components,
  },
  withDefaultColorScheme({ colorScheme: 'primary' }),
  globalStyles,
  CardComponent,
  PanelContainerComponent
);
