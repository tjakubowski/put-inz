import React from 'react';
import Card from 'components/Card';
import Avatar from 'components/Avatar';
import { CenteredDiv, DataDiv, StyledName } from './styled';
import Button from 'components/Button';
import theme from 'theme/theme';

const PatientCard: React.FC = () => {
  return (
    <Card>
      <DataDiv>
        <CenteredDiv>
          <Avatar size={96} src="https://picsum.photos/64" />
        </CenteredDiv>
        <CenteredDiv>
          <div>
            <StyledName>Maciej Chajda</StyledName>
            <small>maciej.chajda@gmail.com</small>
          </div>
        </CenteredDiv>
        <CenteredDiv>
          <StyledName>15</StyledName>
          <StyledName>|</StyledName>
          <StyledName>15</StyledName>
        </CenteredDiv>
        <CenteredDiv>
          <small>previous</small>
          <small>|</small>
          <small>upcoming</small>
        </CenteredDiv>
      </DataDiv>
      <DataDiv>
        <CenteredDiv>
          <Button type="submit" block color={theme.colors.primary}>
            Send Message
          </Button>
        </CenteredDiv>
      </DataDiv>
    </Card>
  );
};

export default PatientCard;
