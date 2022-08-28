import { createSlice } from '@reduxjs/toolkit';

export const popupsSlice = createSlice({
  name: 'popupsSlice',
  initialState: {
    list: []
  },
  reducers: {
    openPopup: (state, { payload: popup }) => {
      const i = state.list.findIndex((p) => p.id === popup.id);
      if (i < 0) {
        state.list.unshift(popup);
      }
    },
    closePopup: (state, { payload: popup }) => {
      const i = state.list.findIndex((p) => p.id === popup.id);
      if (i >= 0) {
        state.list.splice(i, 1);
      }
    }
  }
});

export const { actions } = popupsSlice;
export default popupsSlice.reducer;
