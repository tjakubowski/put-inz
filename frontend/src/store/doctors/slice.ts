import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, fetchOne } from './actions';

export type Doctor = {
  id: number;
  firstname: string;
  lastname: string;
  specializations: string[];
};

interface DoctorsState {
  doctor?: Doctor | null;
  doctors: Doctor[];
}

const initialState: DoctorsState = {
  doctor: null,
  doctors: [],
};

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOne.fulfilled, (state, action) => {
      state.doctor = action.payload;
    });
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.doctors = action.payload.doctors;
    });
  },
});

export default doctorsSlice.reducer;
