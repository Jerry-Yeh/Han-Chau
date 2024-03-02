import { createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
  isShow: boolean;
}

const initialState: LoadingState = {
  isShow: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setShow(state, action) {
      state.isShow = action.payload;
    },
  },
});

export const { setShow } = loadingSlice.actions;

export default loadingSlice.reducer;
