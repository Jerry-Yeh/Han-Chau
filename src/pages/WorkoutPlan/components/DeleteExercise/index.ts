import DeleteExercise from './DeleteExercise';

import type { CompleteExercise } from '~/services/exercise';

export interface DeleteExerciseProps {
  children?: React.ReactNode;
  show: boolean;
  exercise: CompleteExercise;
  onClose: () => void;
  onConfirm: () => void;
}

export default DeleteExercise;
