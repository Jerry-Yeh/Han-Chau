import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { interpret } from 'xstate';
import { inspect } from '@xstate/inspect';

import router from '~/router';
import { store, persistor } from '~/store';
import { machine } from './state';

import '~/style/index.scss';
import './i18n';

/** States */
inspect({
  // options
  url: 'https://stately.ai/viz?inspect',
  // url: 'https://statecharts.io/inspect',
  iframe: false, // open in new window
});
interpret(machine, { devTools: true }).start();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
