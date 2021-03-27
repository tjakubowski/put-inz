import React from "react";
import { StyledInput, StyledLabel, StyledSpan } from "./styled";

interface Props {
  name: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  label?: string;
  placeholder?: string;
  required?: boolean;
  block?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
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
}) => {
  return (
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
  );
};

TextInput.defaultProps = {
  type: "text",
  required: false,
  block: false,
};

export default TextInput;
