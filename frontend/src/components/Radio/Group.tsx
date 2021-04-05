import React from 'react';
import styled from 'styled-components';
import RadioContext from './RadioContext';

const StyledRadioGroupContainer = styled.div``;

export interface RadioGroupProps {
  name: string;
  defaultValue: string | number;
  onChange?(value: string | number): any;
}

const Group: React.FC<RadioGroupProps> = ({
  children,
  onChange,
  name,
  defaultValue,
}) => {
  const [value, setValue] = React.useState<string | number>('');

  function handleOnChange(radioValue: string | number) {
    setValue(radioValue);
    onChange && onChange(radioValue);
  }

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <RadioContext.Provider value={{ radioValue: value, handleOnChange, name }}>
      <StyledRadioGroupContainer role="radiogroup">
        {children}
      </StyledRadioGroupContainer>
    </RadioContext.Provider>
  );
};

Group.defaultProps = {
  defaultValue: '',
};

export default Group;
