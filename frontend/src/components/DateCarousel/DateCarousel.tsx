import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import Button from '../Button';
import {
  MdKeyboardArrowLeft as ArrowLeft,
  MdKeyboardArrowRight as ArrowRight,
} from 'react-icons/all';
import { StyledContainer, StyledContent, StyledHeader } from './styled';
import { default as Column } from './DateCarouselColumn';
import dayjs, { Dayjs } from 'dayjs';
import { DatesGroup, getGroupedDatesByDayBetween } from '../../utils/date';

interface IDateCarouselProps {
  columns?: number;
  headerText?: string;
  dates?: Dayjs[];
  selectedDate?: Dayjs;
  onSelect?: (date: Dayjs) => void;
}

const DateCarousel: React.FC<IDateCarouselProps> = ({
  columns = 3,
  headerText = 'Termin wizyty',
  dates = [],
  selectedDate,
  onSelect,
}) => {
  const theme = useContext(ThemeContext);
  const buttonColor = theme.colors.primary;
  const [startDay, setStartDay] = useState(dayjs());
  const [isPreviousButtonDisabled, setPreviousButtonDisabled] = useState(true);
  const [dateGroups, setDateGroups] = useState<DatesGroup[]>([]);

  const handleOnPreviousClick = () => {
    const newStartDay = startDay.add(-columns, 'days');

    if (newStartDay.isBefore(dayjs())) {
      setStartDay(dayjs());
      return;
    }

    setStartDay(startDay.add(-columns, 'days'));
  };

  const handleOnNextClick = () => {
    setStartDay(startDay.add(columns, 'days'));
  };

  useEffect(() => {
    setPreviousButtonDisabled(startDay.isToday());

    setDateGroups(
      getGroupedDatesByDayBetween(
        dates,
        startDay,
        startDay.add(columns, 'day'),
      ),
    );
  }, [startDay, columns, dates]);

  return (
    <StyledContainer>
      <StyledHeader>
        <Button
          onClick={handleOnPreviousClick}
          text
          color={buttonColor}
          disabled={isPreviousButtonDisabled}
        >
          <ArrowLeft size={24} />
        </Button>
        <span>{headerText}</span>
        <Button onClick={handleOnNextClick} text color={buttonColor}>
          <ArrowRight size={24} />
        </Button>
      </StyledHeader>
      <StyledContent>
        {dateGroups &&
          dateGroups.map((dateGroups) => (
            <Column
              key={dateGroups.day.day()}
              datesGroup={dateGroups}
              onSelect={onSelect}
              selectedDate={selectedDate}
            />
          ))}
      </StyledContent>
    </StyledContainer>
  );
};

export default DateCarousel;
