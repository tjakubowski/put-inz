import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/all';
import {
  StyledIcon,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './styled';
import Error from '../Error';

interface ICheckboxProps {
  name: string;
  label?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  checked?: boolean;
  error?: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  value,
  name,
  label,
  onChange,
  checked,
  error,
}) => {
  const [isChecked, check] = useState(checked);
  const icon = isChecked ? (
    <MdCheckBox size={24} />
  ) : (
    <MdCheckBoxOutlineBlank size={24} />
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    check(!isChecked);
    onChange && onChange(e);
  };

  return (
    <>
      <StyledLabel>
        <StyledInputContainer>
          <StyledInput
            type="checkbox"
            name={name}
            value={value}
            onChange={handleChange}
            checked={isChecked}
          />
          <StyledIcon checked={isChecked!}>{icon}</StyledIcon>
        </StyledInputContainer>
        <span>{label}</span>
      </StyledLabel>
      <Error>{error}</Error>
    </>
  );
};

Checkbox.defaultProps = {
  required: false,
  checked: false,
};

export default Checkbox;
