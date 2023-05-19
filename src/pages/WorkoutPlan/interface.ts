import { UPPERLOWERCORE, MODALITY, CHALLENGE } from '~/enums/exercise';
import { LEVEL } from '~/enums/user';

import type { CompleteExerciseData } from '~/services/exercise';
import type { Nullable } from '~/typings/utils';

export interface WorkoutPlan {
  id: string;
  userId: string;
  name: string;
  challenge: CHALLENGE; // Calculated from the exercise in the exercise list.
  upperLowerCoreList: UPPERLOWERCORE[]; // According to the 'upperLowerCore' included in the exercise list.
  modalityList: MODALITY[]; // According to the 'modality' included in the exercise list.
  exerciseList: Array<CompleteExerciseData>;
}

export interface FilterType {
  muscleGroup: number[];
  modalities: number[];
  level: Nullable<LEVEL>;
}
