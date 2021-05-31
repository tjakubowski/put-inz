import React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import { Row, Col } from 'components/Grid';
import { ButtonDiv, AppointmentsDiv, AppointmentDiv, Small, H2, H2Reversed } from './styled';
import { margin, padding } from 'polished';
import theme from '../../theme/theme';
import Appointment from '../Appointment';

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
        <Appointment></Appointment>
      </Card>
    </div>
  );
};

export default PatientAppointments;
