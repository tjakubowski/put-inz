import React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import { Row, Col } from 'components/Grid';
import { ButtonDiv, AppointmentsDiv, AppointmentDiv, Small, H2, H2Reversed } from './styled';
import { margin, padding } from 'polished';
import theme from '../../theme/theme';

const Appointment: React.FC = () => {
  return (
    <AppointmentsDiv>
      <AppointmentDiv>
        <H2>26 Nov '19</H2>
        <Small>09.00 - 10.00</Small>
      </AppointmentDiv>
      <AppointmentDiv>
        <Small>Treatment</Small>
        <H2Reversed>Cutting eighths</H2Reversed>
      </AppointmentDiv>
      <AppointmentDiv>
        <Small>Doctor</Small>
        <H2Reversed>Dr. John Snow</H2Reversed>
      </AppointmentDiv>
    </AppointmentsDiv>
  );
};

export default Appointment;
