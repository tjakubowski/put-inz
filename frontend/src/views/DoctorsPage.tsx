import React, { useEffect, useState } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Container } from 'components/Grid';
import DoctorList from 'components/DoctorList';
import { Doctor } from 'store/doctors/slice';
import api from 'api';

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const getDoctors = async () => {
      const doctors = await api.doctors.getAll();
      setDoctors(doctors);
    };
    getDoctors();
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <DoctorList doctors={doctors} />
      </Container>
    </DefaultLayout>
  );
};

export default DoctorsPage;
