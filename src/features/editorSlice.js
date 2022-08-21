import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
  name: 'editorSlice',
  initialState: {
    content: '',
    height: 120 // pixel
  },
  reducers: {
    setDisplay: (state, action) => {
      Object.assign(state, action.payload);
    }
  }
});

export const { setDisplay } = editorSlice.actions;
export default editorSlice.reducer;
