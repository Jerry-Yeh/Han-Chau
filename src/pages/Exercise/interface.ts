import type { PlanExerciseData } from '~/services/exercise';
import { UPPERLOWERCORE, MODALITY, CHALLENGE } from '~/enums/exercise';
import type { Exercise } from '~/static/exercise/data';

export interface WorkoutPlan {
  id: string;
  userId: string;
  name: string;
  challenge: CHALLENGE; // Calculated from the exercise in the exercise list.
  upperLowerCoreList: UPPERLOWERCORE[]; // According to the 'upperLowerCore' included in the exercise list.
  modalityList: MODALITY[]; // According to the 'modality' included in the exercise list.
  exerciseList: Array<PlanExerciseData & Exercise>;
}
