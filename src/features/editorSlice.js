import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
  name: 'editorSlice',
  initialState: {
    note: null
  },
  reducers: {
    setNote: (state, { payload }) => {
      state.note = payload;
    }
  }
});

export const { setNote } = editorSlice.actions;
export default editorSlice.reducer;
