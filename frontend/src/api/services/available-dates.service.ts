import http from 'api/http';
import dayjs, { Dayjs } from 'dayjs';

export const getBetween = async (startDate: Dayjs, endDate: Dayjs): Promise<Dayjs[]> => {
  const { data } = await http.post(`/api/available-dates`, {
    start_date: startDate,
    end_date: endDate,
  });

  return data.map((dateObject: { date: string }) => dayjs(dateObject.date));
};
