import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
  display: block;
`;

export const StyledSpan = styled.span`
  display: block;
`;

interface InputProps {
  block?: boolean;
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
`;
