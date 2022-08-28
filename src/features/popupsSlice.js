import { createSlice } from '@reduxjs/toolkit';

export const popupsSlice = createSlice({
  name: 'popupsSlice',
  initialState: {
    list: [],
    activePopup: null
  },
  reducers: {
    addPopup: (state, { payload: popup }) => {
      const i = state.list.findIndex((p) => p.id === popup.id);
      if (i < 0) {
        state.list.push({ ...popup, updatedAt: Date.now() });
      }
    },
    updatePopup: (state, { payload: popup }) => {
      const i = state.list.findIndex((p) => p.id === popup.id);
      if (i >= 0) {
        state.list[i] = { ...popup, updatedAt: Date.now() };
        state.list.sort((p1, p2) => p1.updatedAt - p2.updatedAt);
      }
    },
    removePopup: (state, { payload: popup }) => {
      const i = state.list.findIndex((p) => p.id === popup.id);
      if (i >= 0) {
        state.list.splice(i, 1);
      }
    },
    active: (state, action) => {
      state.activePopup = action.payload;
    }
  }
});

export const { actions } = popupsSlice;
export default popupsSlice.reducer;
