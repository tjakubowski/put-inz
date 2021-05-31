import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Container } from 'components/Grid';
import { Row, Col } from 'components/Grid';
import PatientInfo from 'components/PatientInfo';
import PatientCard from 'components/PatientCard';
import PatientAppointments from 'components/PatientAppointments';

const PatientPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col cols={4}>
            <PatientCard />
          </Col>
          <Col cols={8}>
            <PatientInfo />
          </Col>
        </Row>
      </Container>
      <Container>
        <PatientAppointments />
      </Container>
    </DefaultLayout>
  );
};

export default PatientPage;
