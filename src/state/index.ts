import { createMachine } from 'xstate';

export const machine = createMachine({
  id: 'User Flow',
  initial: '/workout-plan',
  predictableActionArguments: true,
  states: {
    '/workout-plan': {
      id: 'workoutPlan',
      initial: 'loading',
      states: {
        loading: {
          on: {
            SUCCESS: 'loaded',
            FAIL: 'failure',
          },
        },
        loaded: {
          on: {
            'CREATE.PLAN': '/plan-detail',
            'SELECT.PLAN': '/plan-detail',
          },
        },
        failure: {
          on: {
            RELOAD: 'loading',
          },
        },
        '/plan-detail': {
          initial: 'loading',
          states: {
            loading: {
              on: {
                SUCCESS: 'loaded',
                FAIL: 'failure',
              },
            },
            loaded: {
              on: {
                'ADD.EXERCISE': '/exercises',
                'EDIT.NAME': 'editing',
              },
            },
            failure: {},
            '/exercises': {
              initial: 'loading',
              states: {
                loading: {
                  on: {
                    SUCCESS: 'loaded',
                    FAIL: 'failure',
                  },
                },
                loaded: {
                  on: {
                    'SELECT.EXERCISE': 'exercise-detail',
                  },
                },
                failure: {},
                'exercise-detail': {
                  on: {
                    CONFIRM: 'exercise-setting',
                    CLOSE: 'loaded',
                  },
                },
                'exercise-setting': {
                  on: {
                    SUCCESS: 'loaded',
                    FAIL: 'loaded',
                    PREVIOUS: 'exercise-detail',
                    CLOSE: 'loaded',
                  },
                },
              },
              on: {
                CLOSE: 'loaded',
                PREVIOUS: 'loaded',
              },
            },
            editing: {
              on: {
                CLOSE: 'loaded',
                CONFIRM: 'loaded',
              },
            },
          },
          on: {
            PREVIOUS: 'loaded',
          },
        },
      },
    },
  },
});

export default {};
