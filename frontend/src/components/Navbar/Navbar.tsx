import React from 'react';
import { Link } from 'react-router-dom';
import {  Container, Row } from '../Grid';
import { StyledContainer, StyledLogo } from './styled';
import { RouterPaths } from '../../router/paths';

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = ({ children }) => {
  return (
    <StyledContainer>
      <Container>
        <Row justify="space-between">
          <Link to={RouterPaths.Homepage}><StyledLogo>Logo</StyledLogo></Link>
          <div>{children}</div>
        </Row>
      </Container>
    </StyledContainer>
  );
};

export default Navbar;
