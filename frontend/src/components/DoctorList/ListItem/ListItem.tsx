import React, { useContext } from 'react';
import Button from 'components/Button';
import Avatar from 'components/Avatar';
import { StyledRow, StyledCell } from './styled';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { Paths } from 'types/router';
import { generatePath } from 'utils/router';
import { Doctor } from 'store/doctors/slice';

export interface IListItemProps {
  doctor: Doctor;
}

const ListItem: React.VFC<IListItemProps> = ({ doctor }) => {
  const theme = useContext(ThemeContext);

  const [specialty] = doctor.specializations;
  const name = `${doctor.firstname} ${doctor.lastname}`;
  const { id } = doctor;

  return (
    <StyledRow>
      <StyledCell>
        <Avatar />
      </StyledCell>
      <StyledCell>{name}</StyledCell>
      <StyledCell>{specialty || '-'}</StyledCell>
      <StyledCell>
        <Link to={generatePath(Paths.Doctor, { id })}>
          <Button color={theme.colors.primary} text sm block>
            Więcej
          </Button>
        </Link>
      </StyledCell>
    </StyledRow>
  );
};

export default ListItem;
