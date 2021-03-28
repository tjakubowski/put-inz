import React from 'react';
import { ButtonProps, StyledButton, StyledIcon, StyledText } from './styled';

export interface Props extends ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  append?: string;
  prepend?: string | React.ReactNode;
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  prepend,
  append,
  ...props
}) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      <StyledText>
        {prepend && <StyledIcon left>{prepend}</StyledIcon>}
        {children}
        {append && <StyledIcon right>{append}</StyledIcon>}
      </StyledText>
    </StyledButton>
  );
};

Button.defaultProps = {
  block: false,
  type: 'button',
  color: '#f5f5f5',
};

export default Button;
