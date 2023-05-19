import DeleteExercise from './DeleteExercise';

import type { CompleteExerciseData } from '~/services/exercise';

export interface DeleteExerciseProps {
  children?: React.ReactNode;
  show: boolean;
  exercise: CompleteExerciseData;
  onClose: () => void;
  onConfirm: () => void;
}

export default DeleteExercise;
