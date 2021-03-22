import React from 'react';
import {Col, Layout, Row} from 'antd';
import styled from "styled-components";
const { Header } = Layout;

const StyledLogo = styled.h2`
  margin: 0;
`

const StyledHeader = styled(Header)`
  background-color: white;
`

const Navbar: React.FC = ({children}) => {
    return (
        <StyledHeader>
            <Row justify="space-between">
                <Col>
                    <StyledLogo>Logo</StyledLogo>
                </Col>
                <Col>
                    { children }
                </Col>
            </Row>
        </StyledHeader>
    );
};

export default Navbar;
