import http from 'api/http';
import { Doctor } from 'store/doctors/slice';

export const getAll = async (): Promise<Doctor[]> => {
  const { data } = await http.get(`/api/doctors`);
  return data;
};

export const get = async (id: string | number): Promise<Doctor> => {
  const { data } = await http.get(`/api/doctors/${id}`);
  return data;
};
