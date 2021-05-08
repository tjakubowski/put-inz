import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container } from '../components/Grid';
import DoctorList from '../components/DoctorList';

const DoctorsPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <DoctorList />
      </Container>
    </DefaultLayout>
  );
};

export default DoctorsPage;
