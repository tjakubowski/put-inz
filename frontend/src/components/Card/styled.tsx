import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/styled';

const PaddingCss = css`
  padding: 16px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

export interface IStyledImageProps {
  maxHeight?: string;
}

export const StyledImage = styled.img<IStyledImageProps>`
  width: 100%;
  max-width: 100%;
  max-height: ${({ maxHeight }) => maxHeight || null};
  object-fit: cover;
`;

export const StyledTitle = styled.div`
  ${PaddingCss};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
`;

export const StyledText = styled.div`
  ${PaddingCss};
`;

export const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;

  ${StyledButton}:not(:first-child) {
    margin-left: 8px;
  }
`;
