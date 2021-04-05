import React from 'react';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/all';
import useRadioContext from './useRadioContext';
import {
  StyledIcon,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './styled';
import Group, { RadioGroupProps } from './Group';

interface Props {
  label?: string;
  value: string;
}

interface RadioGroupComposition {
  Group: React.FC<RadioGroupProps>;
}

const Radio: React.FC<Props> & RadioGroupComposition = ({ value, label }) => {
  const { radioValue, handleOnChange, name } = useRadioContext();
  const isChecked = value === radioValue;

  const icon = isChecked ? (
    <MdRadioButtonChecked size={24} />
  ) : (
    <MdRadioButtonUnchecked size={24} />
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleOnChange(e.target.value);
  };

  return (
    <StyledLabel>
      <StyledInputContainer>
        <StyledInput
          type="radio"
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

Radio.Group = Group;

export default Radio;
