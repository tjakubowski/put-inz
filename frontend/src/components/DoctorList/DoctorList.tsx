import React, { useContext } from 'react';
import ListItem from './ListItem';
import { StyledTable, StyledTableHeader } from './styled';

const DoctorList: React.FC = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableHeader> </StyledTableHeader>
          <StyledTableHeader>Name</StyledTableHeader>
          <StyledTableHeader>Specialty</StyledTableHeader>
          <StyledTableHeader>Phone number</StyledTableHeader>
          <StyledTableHeader> </StyledTableHeader>
        </tr>
      </thead>
      <tbody>
        <ListItem
          name="Floyd Whitney"
          specialty="Cardiologist"
          phone="+1 (212) 556-5566"
        />
        <ListItem
          name="Lauren Bloom"
          specialty="E.R. Doctor"
          phone="+1 (212) 556-6655"
        />
      </tbody>
    </StyledTable>
  );
};

export default DoctorList;
