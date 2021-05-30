import React, { useContext } from 'react';
import { Meta, Story } from '@storybook/react';

import Card, { ICardProps } from './Card';
import Button from 'components/Button';
import { ThemeContext } from 'styled-components';

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<ICardProps> = (args) => {
  const theme = useContext(ThemeContext);

  return (
    <Card {...args}>
      <Card.Image src="https://picsum.photos/1000" maxHeight="200px" />
      <Card.Title>Card Title</Card.Title>
      <Card.Text>Card text</Card.Text>
      <Card.Actions>
        <Button text color={theme.colors.error}>
          Cancel
        </Button>
        <Button color={theme.colors.primary}>Submit</Button>
      </Card.Actions>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {};
