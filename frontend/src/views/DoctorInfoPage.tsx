import React, { useEffect } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Col, Container, Row } from '../components/Grid';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchOne } from '../store/doctors/actions';
import { useParams } from 'react-router-dom';

interface ParamTypes {
  id?: string
}

const DoctorInfoPage = () => {
  const { id } = useParams<ParamTypes>();
  const dispatch = useAppDispatch();
  const doctor = useAppSelector((state) => state.doctors.doctor);

  useEffect(() => {
    dispatch(fetchOne(id!));
  }, [dispatch, id]);

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col cols={12}>
            <h2>{doctor && `${doctor.firstname} ${doctor.lastname}` }</h2>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default DoctorInfoPage;
