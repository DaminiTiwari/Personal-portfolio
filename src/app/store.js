
import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/projectSlice';

export const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
  devTools: false,
});
