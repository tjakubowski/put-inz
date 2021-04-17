import dayjs from 'dayjs';

const dates = [
  dayjs().hour(12).minute(0),
  dayjs().hour(15).minute(0),
  dayjs().hour(14).minute(0),
  dayjs().hour(17).minute(0),
  dayjs().hour(18).minute(0),

  dayjs().add(1, 'days').hour(9).minute(0),
  dayjs().add(1, 'days').hour(10).minute(0),
  dayjs().add(1, 'days').hour(12).minute(0),
  dayjs().add(1, 'days').hour(17).minute(0),

  dayjs().add(2, 'days').hour(14).minute(0),
  dayjs().add(2, 'days').hour(15).minute(0),
  dayjs().add(2, 'days').hour(16).minute(0),
  dayjs().add(2, 'days').hour(17).minute(0),
];

export default dates;
