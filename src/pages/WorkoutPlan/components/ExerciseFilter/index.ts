import ExerciseFilter from './ExerciseFilter';

import type { FilterType } from '~/pages/WorkoutPlan/interface';

export interface ExerciseFilterProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  onClear: () => void;
  onConfirm: (value: FilterType) => void;
}

export default ExerciseFilter;
