import { createSlice } from '@reduxjs/toolkit';

export const notes = createSlice({
  name: 'notes',
  initialState: {
    list: [],
    trash: []
  },
  reducers: {
    add: (state, { payload }) => {
      const index = state.list.findIndex((note) => note.id === payload.id);

      if (index >= 0) {
        state.list[index] = payload;
      } else {
        state.list.unshift(payload);
      }
    },
    remove: (state, { payload }) => {
      const index = state.list.findIndex((note) => note.id === payload.id);

      if (index >= 0) {
        state.trash = state.trash || [];
        state.trash.unshift(state.list[index]);
        state.list.splice(index, 1);
      }
    }
  }
});

export const { actions } = notes;
export default notes.reducer;
