import React from 'react';
import { Meta, Story } from '@storybook/react';

import Select, { ISelectProps } from './Select';
import { Controller, useForm } from 'react-hook-form';

export default {
  title: 'Atoms/Inputs/Select',
  component: Select,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const autocomplete = [
  { label: 'Lorem', value: '1' },
  { label: 'ipsum', value: '2' },
  { label: 'Dolor', value: '3' },
  { label: 'sit', value: '4' },
  { label: 'amet', value: '5' },
  { label: 'elit', value: '6' },
  { label: 'Deserunt', value: '7' },
  { label: 'consectetur', value: '8' },
  { label: 'adipisicing', value: '9' },
];

const Template: Story<ISelectProps> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <Controller
      control={control}
      name="doctor"
      render={({ field: { onChange, onBlur, value } }) => (
        <Select
          {...args}
          options={autocomplete}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          error={errors.doctor?.message}
        />
      )}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Input label',
  placeholder: 'type something...',
  error: 'error message',
};
