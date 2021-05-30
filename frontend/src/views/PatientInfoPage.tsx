import React, { useEffect } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Col, Container, Row } from 'components/Grid';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchOne } from 'store/patients/actions';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

interface ParamTypes {
  id?: string;
}

const StyledLabel = styled.p`
  font-weight: 700;
`;

const PatientInfoPage = () => {
  const { id } = useParams<ParamTypes>();
  const dispatch = useAppDispatch();
  const patient = useAppSelector((state) => state.patients.patient);

  useEffect(() => {
    dispatch(fetchOne(id!));
  }, [dispatch, id]);

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
