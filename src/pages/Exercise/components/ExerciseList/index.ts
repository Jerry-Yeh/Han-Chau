import ExerciseList from './ExerciseList';

import { Exercise } from '~/static/exercise/data';

export interface ExerciseListProps {
  children?: React.ReactNode;
  data: Exercise[];
  onClick: (id: number) => void;
  onControl: (id: number) => void;
}

export default ExerciseList;
