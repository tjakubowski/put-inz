import { createAsyncThunk } from '@reduxjs/toolkit';
import { Patient } from './slice';
import api from '../../api';

export const fetchOne = createAsyncThunk(
  'patient/fetchOne',
  async (id: string | number): Promise<Patient> => {
    return await api.patients.get(id);
  },
);

export const fetchAll = createAsyncThunk('patient/fetchAll', async () => {
  return await api.patients.getAll();
});
