import http from 'api/http';
import { Doctor } from 'store/doctors/slice';

const mapDoctor = (doctor: any): Doctor => ({
  id: doctor.user.pk,
  firstname: doctor.first_name,
  lastname: doctor.last_name,
  specializations: doctor.specializations,
});

export const getAll = async (): Promise<Doctor[]> => {
  const { data } = await http.get(`/api/doctors`);

  return data.map(mapDoctor);
};

export const get = async (id: string | number): Promise<Doctor> => {
  const { data } = await http.get(`/api/doctors/${id}`);

  return mapDoctor(data);
};
