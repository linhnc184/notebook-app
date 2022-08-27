import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import notes from './features/notesSlice';
import editor from './features/editorSlice';
import popups from './features/popupsSlice';

export default configureStore({
  reducer: persistReducer(
    {
      key: 'root22',
      storage
    },
    combineReducers({
      notes,
      editor,
      popups
    })
  ),
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
});
