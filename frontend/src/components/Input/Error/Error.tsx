import React from 'react';
import { StyledErrorBlock, StyledErrorInline } from './styled';

interface Props {
  inline?: boolean;
}

const Error: React.FC<Props> = ({ children, inline }) => {
  return inline ? (
    <StyledErrorInline>{children}</StyledErrorInline>
  ) : (
    <StyledErrorBlock>{children}</StyledErrorBlock>
  );
};

Error.defaultProps = {
  inline: false,
};

export default Error;
