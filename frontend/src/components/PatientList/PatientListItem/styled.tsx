import styled from 'styled-components';

export const StyledRow = styled.tr`
  margin: 0;
  padding-bottom: 8px;
`;

export const StyledCell = styled.td`
  padding: 8px;
  background-color: #ebebeb;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const StyledName = styled.h2`
  margin: 0;
  color: indigo;
  font-weight: 700;
`;

export const StyledDescription = styled.p`
  font-weight: 300;
`;
