import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container } from '../components/Grid';
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <RegisterForm />
      </Container>
    </DefaultLayout>
  );
};

export default RegisterPage;
