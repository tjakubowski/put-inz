import styled from 'styled-components';

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  flex-grow: 1;
  flex-basis: 0;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.default};
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  text-align: center;
  font-weight: bold;
`;

export const StyledDay = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const StyledDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  text-align: center;
  font-weight: bold;

  & > * {
    margin-bottom: 8px;
  }
`;
