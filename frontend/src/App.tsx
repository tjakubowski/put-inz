import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import DoctorsPage from './views/Doctors';
import PatientsPage from './views/Patients';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/doctors" component={DoctorsPage} />
          <Route path="/patients" component={PatientsPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
