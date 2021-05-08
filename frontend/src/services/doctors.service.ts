import API from '../plugins/axios';

export const getAll = async () => {
  const { data } = await API.get('/api/doctors');

  return data;
};

export const get = async (id: string | number) => {
  const { data } = await API.get(`/api/doctors/${id}`);
  const [doctor] = data;

  return doctor;
};
