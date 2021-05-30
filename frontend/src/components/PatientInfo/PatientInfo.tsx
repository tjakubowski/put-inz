import React from 'react';
import Card from 'components/Card';
import { Row, Col } from 'components/Grid';
import { DataCell, DataCellText, DataDiv } from './styled';

const PatientInfo: React.FC = () => {
  return (
    <Card>
      <DataDiv>
        <Row>
          <Col cols={4}>
            <DataCell>
              <div>
                <DataCellText>Gender</DataCellText>
                <span>male</span>
              </div>
            </DataCell>
          </Col>
          <Col cols={4}>
            <DataCell>
              <div>
                <DataCellText>Birthday</DataCellText>
                <span>23.11.2021</span>
              </div>
            </DataCell>
          </Col>
          <Col cols={4}>
            <DataCell>
              <div>
                <DataCellText>Phone number</DataCellText>
                <span>+48 728953560</span>
              </div>
            </DataCell>
          </Col>
          <Col cols={4}>
            <DataCell>
              <div>
                <DataCellText>Street Address</DataCellText>
                <span>Lawendowa 29</span>
              </div>
            </DataCell>
          </Col>
          <Col cols={4}>
            <DataCell>
              <div>
                <DataCellText>City</DataCellText>
                <span>Poznan</span>
              </div>
            </DataCell>
          </Col>
          <Col cols={4}>
            <DataCell>
              <div>
                <DataCellText>Zip code</DataCellText>
                <span>61-552</span>
              </div>
            </DataCell>
          </Col>
          <Col cols={4}>
            <DataCell>
              <div>
                <DataCellText>Member status</DataCellText>
                <span>Active member</span>
              </div>
            </DataCell>
          </Col>
          <Col cols={4}>
            <DataCell>
              <div>
                <DataCellText>Register Date</DataCellText>
                <span>18.02.2021</span>
              </div>
            </DataCell>
          </Col>
        </Row>
      </DataDiv>
    </Card>
  );
};

export default PatientInfo;
