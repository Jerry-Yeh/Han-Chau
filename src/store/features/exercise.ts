import { createSlice } from '@reduxjs/toolkit';

import { MUSCLES, CHALLENGE } from '~/enums/exercise';

import type { WorkoutPlan } from '~/pages/WorkoutPlan/interface';

import Abdominals from '~/assets/img/muscle-group/abdominals.png';
import Back from '~/assets/img/muscle-group/back.png';
import Arms from '~/assets/img/muscle-group/arms.png';
import Chest from '~/assets/img/muscle-group/chest.png';
import Shoulders from '~/assets/img/muscle-group/shoulders.png';
import Legs from '~/assets/img/muscle-group/legs.png';
import Calves from '~/assets/img/muscle-group/calves.png';

export interface ExerciseState {
  muscleGroupImages: Partial<Record<MUSCLES, string>>;
  selectedPlan: WorkoutPlan;
}

const initialState: ExerciseState = {
  muscleGroupImages: {
    [MUSCLES.ABDOMINALS]: Abdominals,
    [MUSCLES.BACK]: Back,
    [MUSCLES.ARMS]: Arms,
    [MUSCLES.CHEST]: Chest,
    [MUSCLES.SHOULDERS]: Shoulders,
    [MUSCLES.LEGS]: Legs,
    [MUSCLES.CLAVES]: Calves,
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
