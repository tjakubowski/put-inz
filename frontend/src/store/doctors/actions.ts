import { createAsyncThunk } from '@reduxjs/toolkit';
import { DoctorsService } from '../../services';
import { Doctor } from './slice';

export const fetchOne = createAsyncThunk('doctor/fetchOne', async (id: string | number ): Promise<Doctor> => {
  const doctor = await DoctorsService.get(id);
  return { firstname: doctor['first_name'], lastname: doctor['last_name'] };
});

export const fetchAll = createAsyncThunk('doctor/fetchAll', async () => {
  const doctors = await DoctorsService.getAll();
  return { doctors };
});
