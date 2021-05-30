import { createAsyncThunk } from '@reduxjs/toolkit';
import { Doctor } from './slice';
import api from '../../api';

export const fetchOne = createAsyncThunk(
  'doctor/fetchOne',
  async (id: string | number): Promise<Doctor> => {
    const doctor = await api.doctors.get(id);

    // @ts-ignore
    return { firstname: doctor['first_name'], lastname: doctor['last_name'] };
  },
);

export const fetchAll = createAsyncThunk('doctor/fetchAll', async () => {
  const doctors = await api.doctors.getAll();
  return { doctors };
});
