import React from 'react';
import styled from 'styled-components';
import Container from "../Container";

const StyledContainer = styled.nav`
  padding: 1.6rem 0;
`

const StyledContent = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.h2`
  margin: 0;
`

const Navbar: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledLogo>Logo</StyledLogo>
      </StyledContent>
    </StyledContainer>
  );
};

export default Navbar;
