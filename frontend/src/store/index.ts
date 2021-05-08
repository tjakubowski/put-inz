import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/slice';
import patients from './patients/slice';
import doctors from './doctors/slice';

const store = configureStore({
  reducer: {
    auth,
    patients,
    doctors,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
