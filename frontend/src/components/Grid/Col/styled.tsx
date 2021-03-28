import { ColProps, ColumnSize } from './Col';
import styled, { css } from 'styled-components';

const getSizePercentage = (size: ColumnSize) => {
  return `${(size / 12) * 100}%`;
};

const getColumnCss = (width: ColumnSize) => {
  const sizePercentage = getSizePercentage(width);

  return css`
    flex: 0 0 ${sizePercentage};
    max-width: ${sizePercentage};
  `;
};

const getOffsetCss = (offset: ColumnSize) => {
  const offsetPercentage = getSizePercentage(offset);

  return css`
    margin-left: ${offsetPercentage};
  `;
};

const getOrderCss = (order: ColumnSize) => {
  return css`
    order: ${order} !important;
  `;
};

export const StyledContainer = styled.div<ColProps>`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ cols }) => cols && getColumnCss(cols)}
  ${({ offset }) => offset && getOffsetCss(offset)}
  ${({ order }) => order && getOrderCss(order)}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${({ sm }) => sm && getColumnCss(sm)}
    ${({ offsetSM }) => offsetSM && getOffsetCss(offsetSM)}
    ${({ orderSM }) => orderSM && getOrderCss(orderSM)}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ md }) => md && getColumnCss(md)}
    ${({ offsetMD }) => offsetMD && getOffsetCss(offsetMD)}
    ${({ orderMD }) => orderMD && getOrderCss(orderMD)}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ lg }) => lg && getColumnCss(lg)}
    ${({ offsetLG }) => offsetLG && getOffsetCss(offsetLG)}
    ${({ orderLG }) => orderLG && getOrderCss(orderLG)}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${({ xl }) => xl && getColumnCss(xl)}
    ${({ offsetXL }) => offsetXL && getOffsetCss(offsetXL)}
    ${({ orderXL }) => orderXL && getOrderCss(orderXL)}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    ${({ xxl }) => xxl && getColumnCss(xxl)}
    ${({ offsetXXL }) => offsetXXL && getOffsetCss(offsetXXL)}
    ${({ orderXXL }) => orderXXL && getOrderCss(orderXXL)}
  }
`;
