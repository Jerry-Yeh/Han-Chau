import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Nullable } from '~/typings/utils';

export type User = {
  id?: string;
  height: Nullable<number>;
  weight: Nullable<number>;
  gender: Nullable<number>;
  birth?: Nullable<number>;
  amount: Nullable<number>;
  level: Nullable<number>;
  targetWeight?: number;
  name: string;
  login?: string;
};

export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    id: '',
    height: null,
    weight: null,
    gender: null,
    amount: null,
    level: null,
    name: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
    // changeHeight(state, action: PayloadAction<number>) {
    //   state.user.height = action.payload;
    // },
    // changeName(state, action: PayloadAction<string>) {
    //   state.user.name = action.payload;
    // },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
