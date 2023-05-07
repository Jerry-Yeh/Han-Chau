import AddExerciseFromList from './AddExerciseFromList';

import type { FilterType } from '~/pages/Exercise/interface';

export interface AddExerciseFromListProps {
  children?: React.ReactNode;
  show: boolean;
  searchText: string;
  filter: FilterType;
}

export default AddExerciseFromList;
