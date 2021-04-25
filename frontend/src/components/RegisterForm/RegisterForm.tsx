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
  address: string;
  zipcode: string;
  password: string;
  passwordCheck: string;
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
                placeholder="example@mail.com"
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
                placeholder="John"
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
                placeholder="Doe"
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
                placeholder="94041194013"
                error={errors.email?.message}
              />
            )}
          />
        </Col>
        <Col cols={9}>
          <Controller
            control={control}
            name="address"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Adres"
                type="text"
                block
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="519 N May Ave. Fort Smith"
                error={errors.email?.message}
              />
            )}
          />
        </Col>
        <Col cols={3}>
          <Controller
            control={control}
            name="zipcode"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Kod pocztowy"
                type="text"
                block
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="72901"
                error={errors.email?.message}
              />
            )}
          />
        </Col>
        <Col cols={6}>
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
                error={errors.email?.message}
              />
            )}
          />
        </Col>
        <Col cols={6}>
          <Controller
            control={control}
            name="passwordCheck"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Powtórz hasło"
                type="password"
                block
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="confirm password"
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
