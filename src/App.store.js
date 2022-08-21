import { configureStore } from '@reduxjs/toolkit';
import editorSlice from './features/editorSlice';

export default configureStore({
  reducer: {
    editor: editorSlice
  }
});
