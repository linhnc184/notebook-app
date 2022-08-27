import { createSlice } from '@reduxjs/toolkit';

export const popupsSlice = createSlice({
  name: 'popupsSlice',
  initialState: {
    list: []
  },
  reducers: {
    addPopup: (state, { payload: popup }) => {
      const i = state.list.findIndex((p) => p.id === popup.id);
      if (i < 0) {
        state.list.unshift(popup);
      }
    },
    updatePopup: (state, { payload: popup }) => {
      const i = state.list.findIndex((p) => p.id === popup.id);
      if (i >= 0) {
        state.list[i] = popup;
      }
    },
    removePopup: (state, { payload: popup }) => {
      const i = state.list.findIndex((p) => p.id === popup.id);
      if (i >= 0) {
        state.list.slice(i, 0);
      }
    }
  }
});

export const { actions } = popupsSlice;
export default popupsSlice.reducer;
