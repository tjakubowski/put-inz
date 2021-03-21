import styled  from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.6rem;
  
  @media (min-width: ${({theme}) => theme.breakpoints.sm}) {
    max-width: 540px;
  }
  
  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    max-width: 720px;
  }
  
  @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
    max-width: 960px;
  }
  
  @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
    max-width: 1140px;
  }
  
  @media (min-width: ${({theme}) => theme.breakpoints['2xl']}) {
    max-width: 1320px;
  }
`;

export default Container;
