import FilterExercise from './FilterExercise';

import type { Nullable } from '~/typings/utils';
import { LEVEL } from '~/enums/user';

export interface FilterType {
  muscleGroup: number[];
  modalities: number[];
  level: Nullable<LEVEL>;
}

export interface FilterExerciseProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  onClear: () => void;
  onConfirm: (value: FilterType) => void;
}

export default FilterExercise;
