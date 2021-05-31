import React, { useEffect, useState } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Col, Container, Row } from 'components/Grid';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Patient } from 'store/patients/slice';
import api from 'api';

interface ParamTypes {
  id?: string;
}

const StyledLabel = styled.p`
  font-weight: 700;
`;

const PatientInfoPage = () => {
  const { id } = useParams<ParamTypes>();
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    const getPatient = async () => {
      const patient = await api.patients.get(id!);
      setPatient(patient);
    };
    getPatient();
  }, [id]);

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col cols={12}>
            <h2>{patient && `${patient.firstname} ${patient.lastname}`}</h2>
          </Col>
          <Col>
            <StyledLabel>Pesel</StyledLabel>
            <p>{patient && patient.pesel}</p>
          </Col>
          <Col>
            <StyledLabel>Numer telefonu</StyledLabel>
            <p>{patient && patient.phone}</p>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default PatientInfoPage;
