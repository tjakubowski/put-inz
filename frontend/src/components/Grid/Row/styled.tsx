import styled from "styled-components";
import {RowProps} from "./Row";

export const StyledContainer = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-content: ${({ alignContentSM }) => alignContentSM};
    align-items: ${({ alignSM }) => alignSM};
    justify-content: ${({ justifySM }) => justifySM};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-content: ${({ alignContentMD }) => alignContentMD};
    align-items: ${({ alignMD }) => alignMD};
    justify-content: ${({ justifyMD }) => justifyMD};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-content: ${({ alignContentLG }) => alignContentLG};
    align-items: ${({ alignLG }) => alignLG};
    justify-content: ${({ justifyLG }) => justifyLG};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    align-content: ${({ alignContentXL }) => alignContentXL};
    align-items: ${({ alignXL }) => alignXL};
    justify-content: ${({ justifyXL }) => justifyXL};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    align-content: ${({ alignContentXXL }) => alignContentXXL};
    align-items: ${({ alignXXL }) => alignXXL};
    justify-content: ${({ justifyXXL }) => justifyXXL};
  }
`;
