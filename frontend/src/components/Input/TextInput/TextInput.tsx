import React from 'react';
import { InputProps, StyledInput, StyledLabel, StyledSpan } from './styled';
import Error from '../Error/Error';

interface ITextInputProps extends InputProps {
  name?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
}

const TextInput: React.FC<ITextInputProps> = ({
  type = 'text',
  required = false,
  block = false,
  value = '',
  name,
  label,
  placeholder,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <>
      <StyledLabel>
        {label && <StyledSpan>{label}</StyledSpan>}
        <StyledInput
          name={name}
          placeholder={placeholder}
          type={type}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          block={block}
        />
      </StyledLabel>
      <Error>{error}</Error>
    </>
  );
};

export default TextInput;
