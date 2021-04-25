import React, { useContext } from 'react';
import Button from '../../Button';
import Avatar from '../../Avatar';
import { ThemeContext } from 'styled-components';
import { StyledRow, StyledCell } from './styled';

export interface IListItemProps {
  name?: string;
  specialty?: string;
  phone?: string;
}

const ListItem: React.VFC<IListItemProps> = ({ name, specialty, phone }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledRow>
      <StyledCell>
        <Avatar />
      </StyledCell>
      <StyledCell>{name}</StyledCell>
      <StyledCell>{specialty}</StyledCell>
      <StyledCell>{phone}</StyledCell>
      <StyledCell>
        <Button block color="#0D53FC" sm>
          See doctor's details
        </Button>
      </StyledCell>
    </StyledRow>
  );
};

export default ListItem;
