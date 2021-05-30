import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Container } from 'components/Grid';
import PatientList from 'components/PatientList/PatientList';

const PatientsList = () => {
  return (
    <DefaultLayout>
      <Container>
        <PatientList />
      </Container>
    </DefaultLayout>
  );
};

export default PatientsList;
