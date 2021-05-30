import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container } from '../components/Grid';
import BasicInfo from '../components/BasicInfo';
import { Row, Col } from '../components/Grid';
import PatientCard from '../components/PatientCard';

const PatientPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col cols={4}>
            <PatientCard />
          </Col>
          <Col cols={8}>
            <BasicInfo />
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default PatientPage;
