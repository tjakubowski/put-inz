import * as auth from './services/auth.service';
import * as doctors from './services/doctors.service';
import * as patients from './services/patients.service';

const api = {
  auth,
  doctors,
  patients,
};

export default api;
