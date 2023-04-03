import { css } from '@stitches/react';

export const navbar = css({
  backgroundColor: 'red',
  boxShadow: '0 0 10px rgba(0, 0,0, 0.3)',

  '&:hover': {
    boxShadow: '0 0 20px rgba(100, 200, 0, 0.5)',
    transition: 'all 0.3s ease-in-out',
  },
});
