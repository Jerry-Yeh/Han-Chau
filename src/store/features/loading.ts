import { createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
  show: boolean;
}

const initialState: LoadingState = {
  show: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setShow(state, action) {
      state.show = action.payload;
    },
  },
});

export const { setShow } = loadingSlice.actions;

export default loadingSlice.reducer;
