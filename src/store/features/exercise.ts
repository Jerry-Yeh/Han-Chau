import { createSlice } from '@reduxjs/toolkit';

import { store } from '~/store';
import { MUSCLEGROUP } from '~/enums/exercise';

import type { WorkoutPlan } from '~/pages/Exercise/interface';

import Abdominals from '~/assets/img/muscle-group/abdominals.png';
import Back from '~/assets/img/muscle-group/back.png';
import Arms from '~/assets/img/muscle-group/arms.png';
import Chest from '~/assets/img/muscle-group/chest.png';
import Shoulders from '~/assets/img/muscle-group/shoulders.png';
import Legs from '~/assets/img/muscle-group/legs.png';
import Calves from '~/assets/img/muscle-group/calves.png';

export interface ExerciseState {
  muscleGroupImages: Record<MUSCLEGROUP, string>;
  planList: WorkoutPlan[];
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
  planList: [],
};

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    setPlanList(state, action) {
      state.planList = action.payload;
    },
  },
});

export const { setPlanList } = exerciseSlice.actions;

export default exerciseSlice.reducer;
