import React from 'react';
import { Meta, Story } from '@storybook/react';

import Select, { ISelectProps } from './Select';
import { Controller, useForm } from 'react-hook-form';

import selectData from './__mocks__/selectData';

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
          options={selectData}
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
