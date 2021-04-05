import React from 'react';
import { InputProps, StyledInput, StyledLabel, StyledSpan } from './styled';
import Error from '../Error/Error';

interface Props extends InputProps {
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
}

const TextInput: React.FC<Props> = ({
  name,
  type,
  label,
  placeholder,
  required,
  block,
  onChange,
  value,
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
          value={value}
          block={block}
        />
      </StyledLabel>
      <Error>{error}</Error>
    </>
  );
};

TextInput.defaultProps = {
  type: 'text',
  required: false,
  block: false,
};

export default TextInput;
