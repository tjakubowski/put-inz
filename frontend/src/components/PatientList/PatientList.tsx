import React from 'react';
import PatientListItem from './PatientListItem';
import { StyledTable, StyledTableHeader } from './styled';
import { Patient } from 'store/patients/slice';

export interface IPatientListProps {
  patients: Patient[];
}

const PatientList: React.VFC<IPatientListProps> = ({ patients }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableHeader> </StyledTableHeader>
          <StyledTableHeader>Imię i nazwisko</StyledTableHeader>
          <StyledTableHeader>Nr telefonu</StyledTableHeader>
          <StyledTableHeader>Pesel</StyledTableHeader>
          <StyledTableHeader> </StyledTableHeader>
        </tr>
      </thead>
      <tbody>
        {patients &&
          patients.map((patient) => {
            return <PatientListItem key={patient.id} patient={patient} />;
          })}
      </tbody>
    </StyledTable>
  );
};

export default PatientList;
