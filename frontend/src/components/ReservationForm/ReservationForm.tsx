import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';

import { Col, Row } from '../Grid';
import Select from '../Input/Select';
import TextInput from '../Input/TextInput';
import Button from '../Button';
import Checkbox from '../Input/Checkbox';
import Radio from '../Input/Radio';
import DateCarousel from '../DateCarousel';
import { Dayjs } from 'dayjs';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import { up } from 'styled-breakpoints';
import dates from '../DateCarousel/__mocks__/dates';

interface IFormData {
  firstname: string;
  lastname: string;
  email: string;
  pesel: string;
  radiotest: string;
  createAccount: string;
  doctor: any;
  date: Dayjs;
}

const ReservationForm: React.FC = () => {
  const theme = useContext(ThemeContext);
  const isLargeDesktop = useBreakpoint(up('lg'));
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>();

  const autocomplete = [
    { label: 'Lorem', value: '1' },
    { label: 'ipsum', value: '2' },
    { label: 'Dolor', value: '3' },
    { label: 'sit', value: '4' },
    { label: 'amet', value: '5' },
    { label: 'elit', value: '6' },
    { label: 'Deserunt', value: '7' },
    { label: 'consectetur', value: '8' },
    { label: 'adipisicing', value: '9' },
  ];

  const onSubmit = (data: IFormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col cols={12} sm={6}>
          <Controller
            control={control}
            name="firstname"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Imię"
                block
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.firstname?.message}
              />
            )}
          />
        </Col>
        <Col cols={12} sm={6}>
          <Controller
            control={control}
            name="lastname"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Nazwisko"
                block
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.lastname?.message}
              />
            )}
          />
        </Col>
        <Col cols={12}>
          <Controller
            control={control}
            name="email"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Adres e-mail"
                type="email"
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
          <Controller
            control={control}
            name="pesel"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="PESEL"
                block
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.pesel?.message}
              />
            )}
          />
        </Col>
        <Col cols={12}>
          <Controller
            control={control}
            name="createAccount"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                name="createAccount"
                label="Utwórz konto"
                value={value}
                onChange={onChange}
                error={errors.createAccount?.message}
              />
            )}
          />
        </Col>
        <Col cols={12}>
          <Controller
            control={control}
            name="radiotest"
            render={({ field: { onChange, value } }) => (
              <Radio.Group
                defaultValue={value}
                onChange={onChange}
                error={errors.radiotest?.message}
              >
                <Radio label="Test radio 1" value="one" />
                <Radio label="Test radio 2" value="two" />
                <Radio label="Test radio 3" value="three" />
              </Radio.Group>
            )}
          />
        </Col>
        <Col cols={12}>
          <Controller
            control={control}
            name="date"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, value } }) => {
              const columns = isLargeDesktop ? 4 : 3;
              return (
                <DateCarousel
                  dates={dates}
                  onSelect={onChange}
                  selectedDate={value}
                  columns={columns}
                />
              );
            }}
          />
        </Col>
        <Col cols={12}>
          <Controller
            control={control}
            name="doctor"
            rules={{ required: { value: true, message: 'Pole jest wymagane' } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                placeholder="Wyszukaj lekarza"
                label="Lekarz"
                options={autocomplete}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                error={errors.doctor?.message}
              />
            )}
          />
        </Col>
        <Col cols={12}>
          <Button type="submit" block color={theme.colors.primary}>
            Send reservation
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default ReservationForm;
