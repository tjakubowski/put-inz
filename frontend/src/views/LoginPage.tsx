import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container } from '../components/Grid';
import LoginForm from '../components/LoginForm';
import { useAppSelector } from '../hooks';
import { RouterPaths } from '../router/paths';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();

  if (isAuthenticated) {
    history.replace(RouterPaths.Homepage);
  }

  return (
    <DefaultLayout>
      <Container>
        <LoginForm />
      </Container>
    </DefaultLayout>
  );
};

export default LoginPage;
