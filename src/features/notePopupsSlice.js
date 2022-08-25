import { createSlice } from '@reduxjs/toolkit';

export const notePopupsSlice = createSlice({
  name: 'notePopupsSlice',
  initialState: {
    popups: [],
    trash: []
  },
  reducers: {
    addPopup: (state, { payload }) => {
      const newPopup = payload;
      const i = state.popups.findIndex((popup) => popup.key === newPopup.key);
      if (i < 0) {
        state.popups.unshift(payload);
      }
    },
    removePopup: (state, { payload }) => {
      const existPopup = payload;
      const i = state.popups.findIndex((popup) => popup.key === existPopup.key);
      if (i >= 0) {
        state.trash.unshift(state.popups[i]);
        state.popups.slice(i, 0);
      }
    }
  }
});

export const { actions } = notePopupsSlice;
export default notePopupsSlice.reducer;
