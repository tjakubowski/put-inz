import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
          <GuardedRoute
            permittedRoles={[UserRole.Guest]}
            path={Paths.Login}
            component={LoginPage}
            redirectPath={Paths.Homepage}
          />
          <GuardedRoute
            permittedRoles={[UserRole.Guest]}
            path={Paths.Register}
            component={RegisterPage}
            redirectPath={Paths.Homepage}
          />
          <Route exact path={Paths.Patient} component={PatientInfoPage} />
          <Route exact path={Paths.Doctor} component={DoctorInfoPage} />
          <GuardedRoute exact path={Paths.Doctors} component={DoctorsPage} />
          <GuardedRoute
            exact
            permittedRoles={[UserRole.Doctor, UserRole.Receptionist]}
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
