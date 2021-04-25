import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container } from '../components/Grid';
import DoctorList from "../components/DoctorList";

const DoctrosList = () => {
    return (
        <DefaultLayout>
            <Container>
                <DoctorList />
            </Container>
        </DefaultLayout>
    );
};

export default DoctrosList;
