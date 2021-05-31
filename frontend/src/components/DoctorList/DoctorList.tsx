import React from 'react';
import ListItem from './ListItem';
import { StyledTable, StyledTableHeader } from './styled';
import { Doctor } from '../../store/doctors/slice';

export interface IDoctorListProps {
  doctors: Doctor[];
}

const DoctorList: React.VFC<IDoctorListProps> = ({ doctors = [] }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableHeader> </StyledTableHeader>
          <StyledTableHeader>Imię i nazwisko</StyledTableHeader>
          <StyledTableHeader>Specjalność</StyledTableHeader>
          <StyledTableHeader> </StyledTableHeader>
        </tr>
      </thead>
      <tbody>
        {doctors &&
          doctors.map((doctor) => {
            return <ListItem key={doctor.id} doctor={doctor} />;
          })}
      </tbody>
    </StyledTable>
  );
};

export default DoctorList;
