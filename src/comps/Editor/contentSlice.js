import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
  name: 'contentSlice',
  initialState: {
    content: ''
  },
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    }
  }
});

export const { setContent } = contentSlice.actions;
export default contentSlice.reducer;
