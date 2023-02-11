import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '~/App';
// import Login from '~/pages/Login';
import Welcome from '~/pages/Welcome';

/** Onboarding */
import Onboarding from '~/pages/Onboarding';
import Height from '~/pages/Onboarding/components/Height';
import Weight from '~/pages/Onboarding/components/Weight';
import Gender from '~/pages/Onboarding/components/Gender';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Welcome /> },
      {
        path: 'onboarding',
        element: <Onboarding />,
        children: [
          { path: '*', element: <Navigate to='height' replace /> },
          { index: true, element: <Height /> },
          { path: 'height', element: <Height /> },
          { path: 'weight', element: <Weight /> },
          { path: 'gender', element: <Gender /> },
        ],
      },
    ],
  },
]);

export default router;
