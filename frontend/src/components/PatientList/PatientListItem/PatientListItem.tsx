import React from 'react';
import Avatar from 'components/Avatar';
import { StyledRow, StyledCell } from './styled';
import theme from 'theme/theme';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import { generatePath } from 'utils/router';
import { Paths } from 'types/router';
import { Patient } from 'store/patients/slice';

export interface IListItemProps {
  patient: Patient;
}

const PatientListItem: React.VFC<IListItemProps> = ({ patient }) => {
  const name = [patient.firstname, patient.lastname].join(' ');
  const { id, pesel, phone } = patient;

  return (
    <StyledRow>
      <StyledCell>
        <Avatar />
      </StyledCell>
      <StyledCell>{name || '-'}</StyledCell>
      <StyledCell>{phone || '-'}</StyledCell>
      <StyledCell>{pesel || '-'}</StyledCell>
      <StyledCell>
        <Link to={generatePath(Paths.Patient, { id })}>
          <Button color={theme.colors.primary} text sm block>
            Więcej
          </Button>
        </Link>
      </StyledCell>
    </StyledRow>
  );
};

export default PatientListItem;
