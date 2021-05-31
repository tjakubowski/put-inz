import styled from 'styled-components';
import { StyledButton } from '../Button/styled';

export const StyledContainer = styled.div`
  background-color: white;
`;

export const StyledLogo = styled.h2`
  margin: 0;
`;

export const StyledContentContainer = styled.div`
  ${StyledButton} {
    margin-left: 8px;
  }
`;
