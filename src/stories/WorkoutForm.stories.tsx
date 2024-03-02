import { Meta, StoryFn } from '@storybook/react';

import HCWorkoutForm from '~/pages/WorkoutPlan/components/WorkoutForm';
import StoreDecorator from '../../.storybook/decorators/StoreDecorator';

import type { WorkoutPlanTemplateExercise } from '~/services/exercise';

export default {
  title: 'Components/WorkoutForm',
  component: HCWorkoutForm,
  decorators: [StoreDecorator],
  argTypes: {},
} as Meta<typeof HCWorkoutForm>;

type Story = StoryFn<typeof HCWorkoutForm>;

export const Basic: Story = () => {
  const mockData: WorkoutPlanTemplateExercise[] = [
    {
      id: 1692522598611,
      exerciseId: 78,
      sets: 4,
      reps: 8,
    },
    {
      id: 1692522598612,
      exerciseId: 229,
      sets: 4,
      reps: 8,
    },
  ];

  return <HCWorkoutForm data={mockData}></HCWorkoutForm>;
};
