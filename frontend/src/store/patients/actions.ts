import { createAsyncThunk } from '@reduxjs/toolkit';
import { PatientsService } from '../../services';
import { Patient } from './slice';

export const fetchOne = createAsyncThunk('patient/fetchOne', async (id: string | number, ): Promise<Patient> => {
  const patient = await PatientsService.get(id);
  return { firstname: patient['first_name'], lastname: patient['last_name'], pesel: patient['pesel_number'], phone: patient['phone_number'] };
});


export const fetchAll = createAsyncThunk('patient/fetchAll', async () => {
  const patients = await PatientsService.getAll();
  return { patients };
});
