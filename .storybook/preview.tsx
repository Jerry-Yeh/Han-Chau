import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { I18nextProvider } from 'react-i18next';
import React, { Suspense } from 'react';

import i18n from '../src/i18n';

import '../src/style/index.scss';

const withI18next = (Story) => {
  return (
    <Suspense>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

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
    defaultViewport: 'iphone6',
  },
  decorators: [withI18next],
};
