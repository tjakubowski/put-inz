import React from 'react';
import PatientListItem from './PatientListItem';
import { StyledTable, StyledTableHeader } from './styled';

const PatientList: React.FC = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableHeader> </StyledTableHeader>
          <StyledTableHeader>Name</StyledTableHeader>
          <StyledTableHeader>Phone number</StyledTableHeader>
          <StyledTableHeader>City</StyledTableHeader>
          <StyledTableHeader>Next appointment</StyledTableHeader>
          <StyledTableHeader>Last appointment</StyledTableHeader>
          <StyledTableHeader>Register date</StyledTableHeader>
          <StyledTableHeader> </StyledTableHeader>
        </tr>
      </thead>
      <tbody>
        <PatientListItem
          name="Diane Cooper"
          phone="+1 (212) 556-5566"
          city="New York"
          next_appointment="May 25, 2021"
          last_appointment="Apr 13, 2021"
          register_date="Apr 13, 2021"
        />
        <PatientListItem
          name="Jon Snow"
          phone="+1 (732) 321-1234"
          city="New Jersey"
          next_appointment="May 13, 2021"
          last_appointment="Mar 3, 2021"
          register_date="Jan 18, 2021"
        />
        <PatientListItem
          name="Rachel Green"
          phone="+1 (212) 999-9898"
          city="New York"
          next_appointment="May 3, 2021"
          last_appointment="Feb 28, 2021"
          register_date="Feb 14, 2021"
        />
      </tbody>
    </StyledTable>
  );
};

export default PatientList;
