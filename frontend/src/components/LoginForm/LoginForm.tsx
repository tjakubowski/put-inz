import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';

import { Col, Row } from '../Grid';
import TextInput from '../Input/TextInput';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../store/auth/actions';
import { useHistory } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { RouterPaths } from '../../router/paths';

const StyledError = styled.p`
  color: ${({theme}) => theme.colors.error};
  margin: 0;
`

interface IFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const isPending = useAppSelector((state) => state.auth.isPending);
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [globalError, setGlobalError] = useState('');

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = async (data: IFormData) => {
    dispatch(login(data))
      .then(unwrapResult)
      .then(() => {
        history.push(RouterPaths.Homepage);
      })
      .catch(() => {
        setGlobalError('Niepoprawne dane logowania lub użytkownik nie istnieje')
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col cols={12}>
          <Controller
            control={control}
            name="email"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="E-mail"
                type="email"
                block
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="example@mail.com"
                error={errors.email?.message}
              />
            )}
          />
        </Col>
        <Col cols={12}>
          <Controller
            control={control}
            name="password"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Hasło"
                type="password"
                block
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="password"
                error={errors.password?.message}
              />
            )}
          />
        </Col>

        {globalError && (
          <Col cols={12}><StyledError>{globalError}</StyledError></Col>
        )}

        <Col cols={12}>
          <Button
            type="submit"
            block
            color={theme.colors.primary}
            disabled={isPending}
          >
            Login
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default LoginForm;
