import React from 'react';
import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <path
          d="https://firebasestorage.googleapis.com/v0/b/sibol-admin.appspot.com/o/admin%2Fimages%2Fimg-01.png?alt=media&token=28d97bb7-68e6-4623-bfe9-4c04cd854027"
          fill="currentColor"
        />
      ),
      viewBox: '0 0 46 32'
    }
  }

};

export default theme;