import React from 'react';
import { Meta, Story } from '@storybook/react';

import DateCarousel, { IDateCarouselProps } from './DateCarousel';
import { Controller, useForm } from 'react-hook-form';
import dates from './__mocks__/dates';

export default {
  title: 'Molecules/DateCarousel',
  component: DateCarousel,
  argTypes: {
    selectedDate: {
      control: {
        disable: true,
      },
    },
    dates: {
      defaultValue: dates,
    },
  },
} as Meta;

const Template: Story<IDateCarouselProps> = (args) => {
  const { control } = useForm();

  return (
    <Controller
      control={control}
      name="date"
      render={({ field: { onChange, value } }) => (
        <DateCarousel {...args} onSelect={onChange} selectedDate={value} />
      )}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
