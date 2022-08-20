import { configureStore } from '@reduxjs/toolkit';
import setContent from './comps/Editor/contentSlice';
import navTabSlice from './comps/NavTab/navTabSlice';

export default configureStore({
  reducer: {
    editorContent: setContent,
    navActiveTab: navTabSlice
  }
});
