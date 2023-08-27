import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import { CardComponent } from './additions/card/Card';
import { PanelContainerComponent } from './additions/layout/PanelContainer';
import { components } from './components';
import { inter } from './fonts';
import { foundations } from './foundations';
import { globalStyles } from './styles';

const theme = extendTheme(
  {
    fonts: {
      heading: inter.style.fontFamily,
    },
    config: {
      cssVarPrefix: 'app',
      initialColorMode: 'light',
    },
    ...foundations,
    components,
  },
  withDefaultColorScheme({ colorScheme: 'primary' }),
  globalStyles,
  CardComponent,
  PanelContainerComponent
);

export default theme;
