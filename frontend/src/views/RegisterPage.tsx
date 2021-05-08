import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container } from '../components/Grid';
import RegisterForm from '../components/RegisterForm';
import { useAppSelector } from '../hooks';
import { useHistory } from 'react-router-dom';
import { RouterPaths } from '../router/paths';

const RegisterPage = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();

  if (isAuthenticated) {
    history.replace(RouterPaths.Homepage);
  }

  return (
    <DefaultLayout>
      <Container>
        <RegisterForm />
      </Container>
    </DefaultLayout>
  );
};

export default RegisterPage;
