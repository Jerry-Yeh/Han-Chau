import WorkoutForm from './WorkoutForm';

import type { WorkoutPlanTemplateExercise, WorkoutRecordExerciseData } from '~/services/exercise';
import type { Exercise } from '~/static/exercise/data';

export type { WorkoutPlanTemplateExercise } from '~/services/exercise';

export interface WorkoutFormProps {
  children?: React.ReactNode;
  data: WorkoutPlanTemplateExercise[];
}

export type WorkoutFormExercise = WorkoutRecordExerciseData & Omit<Exercise, 'id'>;

export default WorkoutForm;
