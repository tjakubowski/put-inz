import { Dayjs } from 'dayjs';

export type DatesGroup = {
  day: Dayjs;
  dates: Dayjs[];
};

export const isSameDay = (date: Dayjs, day: Dayjs) => date.isSame(day, 'day');

export const groupDatesByDay = (dates: Dayjs[], day: Dayjs) => {
  const groupedDates = dates.reduce((dateArray: Dayjs[], date) => {
    if (isSameDay(date, day)) {
      dateArray.push(date);
    }
    return dateArray;
  }, []);

  return {
    day,
    dates: groupedDates,
  };
};

export const getGroupedDatesByDayBetween: (
  dates: Dayjs[],
  fromDate: Dayjs,
  toDate: Dayjs,
) => DatesGroup[] = (dates: Dayjs[], fromDate: Dayjs, toDate: Dayjs) => {
  if (fromDate.isAfter(toDate)) return [];

  const dateGroups = [];

  let current = fromDate;
  while (current.isBefore(toDate)) {
    const group = groupDatesByDay(dates, current);
    dateGroups.push(group);

    current = current.add(1, 'day');
  }

  return dateGroups;
};
