import WorkoutForm from './WorkoutForm';

import type { WorkoutRecordExerciseData } from '~/services/exercise';
import type { Exercise } from '~/static/exercise/data';

export type { WorkoutRecordExerciseData, WorkoutRecordExerciseSetData } from '~/services/exercise';

export interface WorkoutFormProps {
  children?: React.ReactNode;
  className?: string;
  data: WorkoutFormExercise[];
  setData: (data: WorkoutFormExercise[]) => void;
}

export interface WorkoutFormExercise extends WorkoutRecordExerciseData, Omit<Exercise, 'id'> {
  img: React.ReactNode;
  title: string;
  description: string;
  isCompleted: boolean;
};

export default WorkoutForm;
