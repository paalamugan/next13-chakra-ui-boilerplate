import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
  // 3. We can add a new visual variant
  baseStyle: {
    textDecoration: 'none',
    _hover: {
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
});
