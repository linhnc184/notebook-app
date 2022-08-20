import { createSlice } from '@reduxjs/toolkit';

export const navTabSlice = createSlice({
  name: 'navTabSlice',
  initialState: {
    tabName: null
  },
  reducers: {
    active: (state, action) => {
      state.tabName = action.payload;
    }
  }
});

export const { active } = navTabSlice.actions;
export default navTabSlice.reducer;
