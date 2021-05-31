import React, { useEffect, useState } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Col, Container, Row } from 'components/Grid';
import { useParams } from 'react-router-dom';
import { Doctor } from 'store/doctors/slice';
import api from 'api';
import styled from 'styled-components';

interface ParamTypes {
  id?: string;
}

const StyledLabel = styled.p`
  font-weight: 700;
`;

const DoctorInfoPage = () => {
  const { id } = useParams<ParamTypes>();
  const [doctor, setDoctor] = useState<Doctor>();

  useEffect(() => {
    const getDoctor = async () => {
      const doctor = await api.doctors.get(id!);
      setDoctor(doctor);
    };
    getDoctor();
  }, [id]);

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col cols={12}>
            <h2>{doctor && `${doctor.firstname} ${doctor.lastname}`}</h2>
          </Col>
          <Col>
            <StyledLabel>Specjalizacje</StyledLabel>
            <p>{(doctor && doctor.specializations.join(', ')) || '-'}</p>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default DoctorInfoPage;
