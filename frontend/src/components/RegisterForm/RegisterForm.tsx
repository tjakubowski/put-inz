import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';

import { Col, Row } from '../Grid';
import TextInput from '../Input/TextInput';
import Button from '../Button';

interface IFormData {
  firstname: string;
  lastname: string;
  email: string;
  pesel: string;
  radiotest: string;
  createAccount: string;
}

const RegisterForm: React.FC = () => {
  const theme = useContext(ThemeContext);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => console.log(data);

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
                error={errors.lastname?.message}
              />
            )}
          />
        </Col>
        <Col cols={4}>
          <Controller
              control={control}
              name="firstname"
              rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      label="Imię"
                      type="text"
                      block
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={errors.email?.message}
                  />
              )}
          />
        </Col>
        <Col cols={4}>
          <Controller
              control={control}
              name="lastname"
              rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      label="Nazwisko"
                      type="text"
                      block
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={errors.email?.message}
                  />
              )}
          />
        </Col>
        <Col cols={4}>
          <Controller
              control={control}
              name="pesel"
              rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      label="Pesel"
                      type="text"
                      block
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={errors.email?.message}
                  />
              )}
          />
        </Col>
        <Col cols={9}>
          <Controller
              control={control}
              name="pesel"
              rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      label="Adres"
                      type="text"
                      block
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={errors.email?.message}
                  />
              )}
          />
        </Col>
        <Col cols={3}>
          <Controller
              control={control}
              name="pesel"
              rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      label="Kod pocztowy"
                      type="text"
                      block
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={errors.email?.message}
                  />
              )}
          />
        </Col>
        <Col cols={6}>
          <Controller
              control={control}
              name="pesel"
              rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      label="Hasło"
                      type="password"
                      block
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={errors.email?.message}
                  />
              )}
          />
        </Col>
        <Col cols={6}>
          <Controller
              control={control}
              name="pesel"
              rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      label="Powtórz hasło"
                      type="password"
                      block
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={errors.email?.message}
                  />
              )}
          />
        </Col>

        <Col cols={12}>
          <Button type="submit" block color={theme.colors.primary}>
            Login
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default RegisterForm;
