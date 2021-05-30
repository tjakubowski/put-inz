import React, { useContext } from 'react';
import { StyledColumn, StyledContent, StyledDate, StyledDay, StyledHeader } from './styledColumn';
import Button from 'components/Button';
import { ThemeContext } from 'styled-components';
import { Dayjs } from 'dayjs';
import { DatesGroup } from 'utils/date';

interface IDateCarouselColumnProps {
  datesGroup: DatesGroup;
  onSelect?: (date: Dayjs) => void;
  selectedDate?: Dayjs;
}

const DateCarouselColumn: React.FC<IDateCarouselColumnProps> = ({
  datesGroup,
  onSelect,
  selectedDate,
}) => {
  const theme = useContext(ThemeContext);
  const buttonColor = theme.colors.primary;
  const { day, dates } = datesGroup;

  return (
    <StyledColumn>
      <StyledHeader>
        <StyledDay>{day.format('dddd')}</StyledDay>
        <StyledDate>{day.format('DD.MM')}</StyledDate>
      </StyledHeader>
      <StyledContent>
        {dates &&
          dates.map((date) => {
            const isSelected = date.isSame(selectedDate!);
            return (
              <Button
                key={date.hour()}
                block
                onClick={() => onSelect && onSelect(date)}
                color={buttonColor}
                outlined={!isSelected}
              >
                {date.format('HH:mm')}
              </Button>
            );
          })}
      </StyledContent>
    </StyledColumn>
  );
};

export default DateCarouselColumn;
