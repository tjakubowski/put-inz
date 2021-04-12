import React, { useContext } from 'react';
import { default as ReactSelect, NamedProps, Theme } from 'react-select';
import { ThemeContext } from 'styled-components';
import Error from '../Error';
import { StyledLabel, StyledSpan } from './styled';

interface ISelectProps extends NamedProps {
  error?: string;
  label?: string;
}

const Select: React.FC<ISelectProps> = ({ error, label, ...props }) => {
  const appTheme = useContext(ThemeContext);

  const customTheme = (theme: Theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: appTheme.colors.primary,
    },
  });

  const customStyles = {
    valueContainer: (provided: any) => ({
      ...provided,
      fontSize: appTheme.input.fontSize,
      padding: '7px 16px',
    }),
  };

  return (
    <>
      <StyledLabel>{label && <StyledSpan>{label}</StyledSpan>}</StyledLabel>
      <ReactSelect {...props} styles={customStyles} theme={customTheme} />
      <Error>{error}</Error>
    </>
  );
};

export default Select;
