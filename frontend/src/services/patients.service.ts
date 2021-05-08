import API from '../plugins/axios';

export const getAll = async () => {
  const { data } = await API.get('/api/patients');

  return data;
};

export const get = async (id: string | number) => {
  const { data } = await API.get(`/api/patients/${id}`);
  const [patient] = data;

  return patient;
};
