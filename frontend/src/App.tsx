import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Paths } from './types/router';

import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import DoctorsPage from './views/DoctorsPage';
import PatientsPage from './views/PatientsPage';
import NotFoundPage from './views/NotFoundPage';
import PatientInfoPage from './views/PatientInfoPage';
import DoctorInfoPage from './views/DoctorInfoPage';

import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

import GuardedRoute from './components/GuardedRoute';

import { UserRole } from './types/auth';

import { useSilentTokenRefresh } from './hooks';

const App = () => {
  useSilentTokenRefresh();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path={Paths.Homepage} component={HomePage} />
          <GuardedRoute
            path={Paths.Visits}
            component={HomePage}
            permittedRoles={[UserRole.Doctor]}
          />
          <Route path={Paths.Login} component={LoginPage} />
          <Route path={Paths.Register} component={RegisterPage} />
          <Route path={Paths.Patient} component={PatientInfoPage} />
          <Route path={Paths.Doctor} component={DoctorInfoPage} />
          <GuardedRoute
            exact
            permittedRoles={[UserRole.Patient, UserRole.Receptionist]}
            path={Paths.Doctors}
            component={DoctorsPage}
          />
          <GuardedRoute
            exact
            permittedRoles={[UserRole.Patient]}
            path={Paths.Patients}
            component={PatientsPage}
          />
          <Route path={Paths.NotFound} component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
