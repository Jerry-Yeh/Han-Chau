import { createSlice } from '@reduxjs/toolkit';

import { MUSCLEGROUP, CHALLENGE } from '~/enums/exercise';

import type { WorkoutPlan } from '~/pages/WorkoutPlan/interface';

import Abdominals from '~/assets/img/muscle-group/abdominals.png';
import Back from '~/assets/img/muscle-group/back.png';
import Arms from '~/assets/img/muscle-group/arms.png';
import Chest from '~/assets/img/muscle-group/chest.png';
import Shoulders from '~/assets/img/muscle-group/shoulders.png';
import Legs from '~/assets/img/muscle-group/legs.png';
import Calves from '~/assets/img/muscle-group/calves.png';

export interface ExerciseState {
  muscleGroupImages: Record<MUSCLEGROUP, string>;
  selectedPlan: WorkoutPlan;
}

const initialState: ExerciseState = {
  muscleGroupImages: {
    [MUSCLEGROUP.ABDOMINALS]: Abdominals,
    [MUSCLEGROUP.BACK]: Back,
    [MUSCLEGROUP.ARMS]: Arms,
    [MUSCLEGROUP.CHEST]: Chest,
    [MUSCLEGROUP.SHOULDERS]: Shoulders,
    [MUSCLEGROUP.LEGS]: Legs,
    [MUSCLEGROUP.CLAVES]: Calves,
  },
  selectedPlan: {
    id: '',
    userId: '',
    name: '',
    challenge: CHALLENGE.DEFAULT,
    upperLowerCoreList: [],
    modalityList: [],
    exerciseList: [],
  },
};

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    setSelectedPlan(state, action) {
      state.selectedPlan = action.payload;
    },
    resestSelectedPlan(state, action) {
      state.selectedPlan = {
        id: '',
        userId: action.payload,
        name: '',
        challenge: CHALLENGE.DEFAULT,
        upperLowerCoreList: [],
        modalityList: [],
        exerciseList: [],
      };
    },
  },
});

// export const {} = exerciseSlice.actions;

export default exerciseSlice.reducer;
