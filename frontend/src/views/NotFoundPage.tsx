import React, { useContext } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Col, Container, Row } from '../components/Grid';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../router/paths';
import styled, { ThemeContext } from 'styled-components';
import { ReactComponent as NoDataImage } from '../assets/illustrations/undraw-no-data.svg';

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

const StyledImage = styled(NoDataImage)`
  max-height: 250px;
  margin: 32px 0;
`;

const NotFoundPage = () => {
  const theme = useContext(ThemeContext);

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <StyledCol>
            <StyledHeader>Nie znaleziono strony</StyledHeader>
            <StyledImage />
            <Link to={RouterPaths.Homepage}>
              <Button text color={theme.colors.primary}>
                Wroć do strony głównej
              </Button>
            </Link>
          </StyledCol>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default NotFoundPage;
