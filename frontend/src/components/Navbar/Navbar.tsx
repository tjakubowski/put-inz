import React from "react";
import {Col, Container, Row} from "../Grid";
import {StyledContainer, StyledLogo} from "./styled";

interface Props {

}

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <StyledContainer>
        <Container>
            <Row justify="space-between">
                <Col>
                    <StyledLogo>Logo</StyledLogo>
                </Col>
                <Col>{children}</Col>
            </Row>
        </Container>
    </StyledContainer>
  );
};

export default Navbar;
