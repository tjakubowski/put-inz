import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from '../Grid';
import { StyledContainer, StyledLogo } from './styled';
import { Paths } from '../../types/router';

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = ({ children }) => {
  return (
    <StyledContainer>
      <Container>
        <Row justify="space-between">
          <Link to={Paths.Homepage}>
            <StyledLogo>Logo</StyledLogo>
          </Link>
          <div>{children}</div>
        </Row>
      </Container>
    </StyledContainer>
  );
};

export default Navbar;
