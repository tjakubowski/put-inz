import React from 'react';
import Avatar from 'components/Avatar';
import { StyledRow, StyledCell } from './styled';
import theme from 'theme/theme';
import Button from 'components/Button';

export interface IListItemProps {
  name?: string;
  phone?: string;
  city?: string;
  next_appointment?: string;
  last_appointment?: string;
  register_date?: string;
}

const PatientListItem: React.VFC<IListItemProps> = ({
  name,
  phone,
  city,
  next_appointment,
  last_appointment,
  register_date,
}) => {
  return (
    <StyledRow>
      <StyledCell>
        <Avatar />
      </StyledCell>
      <StyledCell>{name}</StyledCell>
      <StyledCell>{phone}</StyledCell>
      <StyledCell>{city}</StyledCell>
      <StyledCell>{next_appointment}</StyledCell>
      <StyledCell>{last_appointment}</StyledCell>
      <StyledCell>{register_date}</StyledCell>
      <StyledCell>
        <Button type="submit" block color={theme.colors.primary}>
          Send Message
        </Button>
      </StyledCell>
    </StyledRow>
  );
};

export default PatientListItem;
