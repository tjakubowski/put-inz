import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Container } from 'components/Grid';
import PatientInfo from 'components/PatientInfo';
import { Row, Col } from 'components/Grid';
import PatientCard from 'components/PatientCard';

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
    </DefaultLayout>
  );
};

export default PatientPage;
