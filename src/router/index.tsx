import { createBrowserRouter } from 'react-router-dom';

import App from '~/App';
// import Login from '~/pages/Login';
import Welcome from '~/pages/Welcome';
import Onboarding from '~/pages/Onboarding';
import Height from '~/pages/Onboarding/components/Height';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Welcome /> },
      {
        path: 'onboarding',
        element: <Onboarding />,
        children: [{ path: 'height', element: <Height /> }],
      },
    ],
  },
]);

export default router;
