import React, { useEffect, useState } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Container } from 'components/Grid';
import PatientList from 'components/PatientList/PatientList';
import api from 'api';
import { Patient } from 'store/patients/slice';

const PatientsList = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const getPatients = async () => {
      const patients = await api.patients.getAll();
      setPatients(patients);
    };
    getPatients();
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <PatientList patients={patients} />
      </Container>
    </DefaultLayout>
  );
};

export default PatientsList;
