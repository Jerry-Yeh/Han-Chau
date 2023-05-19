import { createMachine } from 'xstate';
// import { useMachine } from '@xstate/react';

const workoutPlanMachine = createMachine({
  id: 'workoutPlan',
  initial: 'init',
  states: {
    init: {},
  },
});

export default workoutPlanMachine;
