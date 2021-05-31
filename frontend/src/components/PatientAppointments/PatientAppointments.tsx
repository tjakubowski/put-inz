import React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import { Row, Col } from 'components/Grid';
import { ButtonDiv, AppointmentsDiv, AppointmentDiv, Small, H2, H2Reversed } from './styled';
import { margin, padding } from 'polished';
import theme from '../../theme/theme';

const PatientAppointments: React.FC = () => {
  return (
    <div style={margin(12)}>
      <Card>
        <ButtonDiv>
          <div style={padding(12)}>
            <Button color={theme.colors.primary}>Upcoming Appointments</Button>
          </div>
          <div style={padding(12)}>
            <Button outlined={true}>Past Appointments</Button>
          </div>
          <div style={padding(12)}>
            <Button outlined={true}>Medical Records</Button>
          </div>
        </ButtonDiv>
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
      </Card>
    </div>
  );
};

export default PatientAppointments;
