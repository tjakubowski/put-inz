import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Container } from 'components/Grid';
import ReservationForm from 'components/ReservationForm';

const HomePage = () => {
  return (
    <DefaultLayout>
      <Container>
        <ReservationForm />
      </Container>
    </DefaultLayout>
  );
};

export default HomePage;
