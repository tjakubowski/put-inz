import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RouterPaths } from './router/paths';

import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import DoctorsPage from './views/DoctorsPage';
import PatientsPage from './views/PatientsPage';
import NotFoundPage from './views/NotFoundPage';

import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

import GuardedRoute from './components/GuardedRoute';

import store from './store';
import { UserRole } from './utils/auth';
import { Provider } from 'react-redux';
import PatientInfoPage from './views/PatientInfoPage';
import DoctorInfoPage from './views/DoctorInfoPage';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path={RouterPaths.Homepage} component={HomePage} />
            <GuardedRoute path={RouterPaths.Visits} component={HomePage} permittedRoles={[UserRole.Doctor]} />
            <Route path={RouterPaths.Login} component={LoginPage} />
            <Route path={RouterPaths.Register} component={RegisterPage} />
            <Route path={RouterPaths.Patient} component={PatientInfoPage} />
            <Route path={RouterPaths.Doctor} component={DoctorInfoPage} />
            <GuardedRoute exact permittedRoles={[UserRole.Patient, UserRole.Receptionist]} path={RouterPaths.Doctors} component={DoctorsPage} />
            <GuardedRoute exact permittedRoles={[UserRole.Patient]} path={RouterPaths.Patients} component={PatientsPage} />
            <Route path={RouterPaths.NotFound} component={NotFoundPage} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
