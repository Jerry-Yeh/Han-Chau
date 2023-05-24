import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '~/App';

/** Welcome */
import Welcome from '~/pages/Welcome';

/** Onboarding */
import Onboarding from '~/pages/Onboarding';

/** Plan */
import Exercise from '~/pages/WorkoutPlan';
import Plan from '~/pages/WorkoutPlan/Plan';
import PlanDetail from '~/pages/WorkoutPlan/PlanDetail';
import AddExercise from '~/pages/WorkoutPlan/AddExercise';
import Exercises from '~/pages/WorkoutPlan/Exercises';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Welcome />,
        children: [{ path: '*', element: <Navigate to='loading' replace /> }],
      },
      {
        path: 'onboarding',
        element: <Onboarding />,
      },
      {
        path: 'workout-plan',
        element: <Exercise />,
        children: [
          { path: '*', element: <Navigate to='Plan' replace /> },
          { index: true, element: <Plan /> },
          {
            path: ':planId',
            element: <PlanDetail />,
          },
          {
            path: ':planId/:exerciseId',
            element: <PlanDetail />,
          },
          {
            path: ':planId/exercises',
            element: <AddExercise />,
            children: [{ path: ':exerciseId', element: <AddExercise /> }],
          },
          {
            path: 'exercises',
            element: <Exercises />,
          },
          {
            path: 'exercises/:exerciseId',
            element: <Exercises />,
          },
        ],
      },
    ],
  },
]);

export default router;
