import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, fetchOne } from './actions';

export type Patient = {
  id: number;
  firstname: string;
  lastname: string;
  pesel: string;
  phone: string;
};

interface PatientsState {
  patient?: Patient | null;
  patients: Patient[];
}

const initialState: PatientsState = {
  patient: null,
  patients: [],
};

export const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOne.fulfilled, (state, action) => {
      state.patient = action.payload;
    });
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.patients = action.payload;
    });
  },
});

export default patientsSlice.reducer;
