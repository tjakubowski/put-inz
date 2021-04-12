import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container } from '../components/Grid';
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <LoginForm />
      </Container>
    </DefaultLayout>
  );
};

export default LoginPage;
