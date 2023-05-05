import DeleteExercise from './DeleteExercise';

export interface DeleteExerciseProps {
  children?: React.ReactNode;
  show: boolean;
  index: number;
  onClose: () => void;
}

export default DeleteExercise;
