import React from 'react';
import { Meta, Story } from '@storybook/react';

import Avatar, { IAvatarProps } from './Avatar';
import { MdPlusOne } from 'react-icons/all';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

// @ts-ignore
const Template: Story<IAvatarProps> = (args) => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 32,
};


export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  src: 'https://picsum.photos/64'
};



export const FallbackIcon = Template.bind({});
FallbackIcon.args = {
  ...Default.args,
  fallbackIcon: <MdPlusOne />,
};
