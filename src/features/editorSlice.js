import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
  name: 'editorSlice',
  initialState: {
    note: null
  },
  reducers: {
    setNote: (state, { payload }) => {
      state.note = { ...payload, createdAt: Date.now() };
    }
  }
});

export const { actions } = editorSlice;
export default editorSlice.reducer;
