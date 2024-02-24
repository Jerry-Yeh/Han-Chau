import ExerciseList from './ExerciseList';

import type { Exercise } from '~/static/exercise/data';
import type { WorkoutPlanTemplateExercise } from '~/services/exercise';

export interface ExerciseListProps {
  children?: React.ReactNode;
  data: (Exercise | (WorkoutPlanTemplateExercise & Exercise))[];
  type?: 'add' | 'info';
  bleed?: boolean;
  title?: boolean;
  onClick: (id: number) => void;
  onControl: (id: number) => void;
}

export default ExerciseList;
