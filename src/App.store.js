import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import editorSlice from './features/editorSlice';

export default configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      storage
    },
    combineReducers({
      editor: editorSlice
    })
  ),
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
});
