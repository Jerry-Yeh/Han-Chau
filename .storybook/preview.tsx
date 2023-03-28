import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ConfigProvider } from 'antd';

import '../src/style/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphonex',
  },
};
