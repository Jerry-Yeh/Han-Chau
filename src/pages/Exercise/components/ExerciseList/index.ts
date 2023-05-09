import ExerciseList from './ExerciseList';

import type { Exercise } from '~/static/exercise/data';
import type { PlanExerciseData } from '~/services/exercise';

export interface ExerciseListProps {
  children?: React.ReactNode;
  data: (Exercise | (PlanExerciseData & Exercise))[];
  type?: 'add' | 'info';
  onClick: (id: number) => void;
  onControl: (id: number) => void;
}

export default ExerciseList;
