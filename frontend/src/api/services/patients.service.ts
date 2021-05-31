import http from 'api/http';
import { Patient } from 'store/patients/slice';

const mapPatient = (patient: any): Patient => ({
  id: patient.user.pk,
  firstname: patient.first_name,
  lastname: patient.last_name,
  pesel: patient.pesel_number,
  phone: patient.phone_number,
});

export const getAll = async (): Promise<Patient[]> => {
  const { data } = await http.get(`/api/patients`);

  return data.map(mapPatient);
};

export const get = async (id: string | number): Promise<Patient> => {
  const { data } = await http.get(`/api/patients/${id}`);

  return mapPatient(data);
};
