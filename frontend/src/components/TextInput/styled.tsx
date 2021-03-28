import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
`;

export const StyledSpan = styled.span`
  display: block;
`;

export interface InputProps {
  block?: boolean;
  rounded?: boolean;
  outlined?: boolean;
}

export const StyledInput = styled.input<InputProps>`
  padding: 8px 16px;
  border: 1px solid #2e2e2e;
  border-radius: 4px;

  ${({ block }) =>
    block &&
    css`
      display: block;
      width: 100%;
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 100px;
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      background-color: transparent;
      border-width: 1px;
      border-style: solid;
    `}
`;
