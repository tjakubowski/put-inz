import http from '../http';
import { Patient } from '../../store/patients/slice';

export const getAll = async (): Promise<Patient[]> => {
  const { data } = await http.get(`/api/patients`);

  return data;
};

export const get = async (id: string | number): Promise<Patient> => {
  const { data } = await http.get(`/api/patients/${id}`);
  return data;
};
