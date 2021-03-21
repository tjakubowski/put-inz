import React from 'react';
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const PageTemplate: React.FC = ({ children }) => {
  return (
      <div>
          <Navbar/>
          <Container>
              { children }
          </Container>
      </div>
  );
};

export default PageTemplate;
