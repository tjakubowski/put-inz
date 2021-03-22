import React from 'react';
import { Layout } from 'antd';
import Navbar from "../components/Navbar";
const { Content } = Layout;

const DefaultLayout: React.FC = ({ children }) => {
  return (
      <Layout>
          <Navbar />
          <Content>{ children }</Content>
      </Layout>
  );
};

export default DefaultLayout;
