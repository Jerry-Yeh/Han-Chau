import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../../src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StoryFn } from '@storybook/react';

const StoreDecorator = (Story: StoryFn) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Story />
      </PersistGate>
    </Provider>
  );
};

export default StoreDecorator;
