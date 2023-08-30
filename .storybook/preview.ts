import type { Preview } from '@storybook/react';

import { appTheme } from '@/styles/theme/appTheme';

const preview: Preview = {
  parameters: {
    chakra: {
      theme: appTheme,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
