import { createSlice } from '@reduxjs/toolkit';

export const notes = createSlice({
  name: 'notes',
  initialState: {
    list: []
  },
  reducers: {
    add: ({ list }, { payload }) => {
      const index = list.findIndex((note) => note.id === payload.id);
      if (index >= 0) {
        list[index] = payload;
      } else {
        list.unshift(payload);
      }
    },
    remove: ({ list }, { payload }) => {
      const index = list.findIndex((note) => note.id === payload.id);
      if (index >= 0) {
        list.splice(index, 1);
      }
    }
  }
});

export const { actions } = notes;
export default notes.reducer;
