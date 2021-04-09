import styled, { css } from 'styled-components';
import { IRowProps } from './Row';

const createRowCss = (
  alignContent?: string,
  align?: string,
  justify?: string,
) => {
  return css`
    align-content: ${alignContent};
    align-items: ${align};
    justify-content: ${justify};
  `;
};

export const StyledContainer = styled.div<IRowProps>`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;

  ${({ alignContent, align, justify }) =>
    createRowCss(alignContent, align, justify)}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${({ alignContentSM, alignSM, justifySM }) =>
      createRowCss(alignContentSM, alignSM, justifySM)}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ alignContentMD, alignMD, justifyMD }) =>
      createRowCss(alignContentMD, alignMD, justifyMD)}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ alignContentLG, alignLG, justifyLG }) =>
      createRowCss(alignContentLG, alignLG, justifyLG)}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${({ alignContentXL, alignXL, justifyXL }) =>
      createRowCss(alignContentXL, alignXL, justifyXL)}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    ${({ alignContentXXL, alignXXL, justifyXXL }) =>
      createRowCss(alignContentXXL, alignXXL, justifyXXL)}
  }
`;
