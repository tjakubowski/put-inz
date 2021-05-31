import * as auth from './services/auth.service';
import * as doctors from './services/doctors.service';
import * as patients from './services/patients.service';
import * as availableDates from './services/available-dates.service';

const api = {
  auth,
  doctors,
  patients,
  availableDates,
};

export default api;
