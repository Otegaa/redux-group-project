import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketSlice';

const Store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default Store;
