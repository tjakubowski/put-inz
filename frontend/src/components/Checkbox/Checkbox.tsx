import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/all';
import {
  StyledIcon,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './styled';

interface Props {
  name: string;
  label?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  checked?: boolean;
}

const Checkbox: React.FC<Props> = ({
  value,
  name,
  label,
  onChange,
  checked,
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
  );
};

Checkbox.defaultProps = {
  required: false,
  checked: false,
};

export default Checkbox;
