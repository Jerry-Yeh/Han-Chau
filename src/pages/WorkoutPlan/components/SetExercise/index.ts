import SetExercise from './SetExercise';

import type { Exercise } from '~/static/exercise/data';
import type { CompleteExercise } from '~/services/exercise';

export enum SET_EXERCISE_ACTION {
  ADD,
  EDIT
}

export interface SetExerciseProps {
  children?: React.ReactNode;
  show: boolean;
  exercise: Exercise | CompleteExercise;
  action: SET_EXERCISE_ACTION;
  sets?: number;
  reps?: number;
  onClose: () => void;
  onConfirm: () => void;
  onPrevious?: () => void;
}

export default SetExercise;
