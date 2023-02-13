import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '~/App';
// import Login from '~/pages/Login';
import Welcome from '~/pages/Welcome';

/** Onboarding */
import Onboarding from '~/pages/Onboarding';
import Height from '~/pages/Onboarding/components/Height';
import Weight from '~/pages/Onboarding/components/Weight';
import Gender from '~/pages/Onboarding/components/Gender';
import Age from '~/pages/Onboarding/components/Age';
import Amount from '~/pages/Onboarding/components/Amount';
import Level from '~/pages/Onboarding/components/Level';
import Target from '~/pages/Onboarding/components/Target';
import Name from '~/pages/Onboarding/components/Name';
import Login from '~/pages/Onboarding/components/Login';
import Terms from '~/pages/Onboarding/components/Terms';

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
          { path: 'age', element: <Age /> },
          { path: 'amount', element: <Amount /> },
          { path: 'level', element: <Level /> },
          { path: 'target', element: <Target /> },
          { path: 'name', element: <Name /> },
          { path: 'login', element: <Login /> },
          { path: 'terms', element: <Terms /> },
        ],
      },
    ],
  },
]);

export default router;
