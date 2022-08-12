import React from 'react';
import { Button } from '../../stateless/button/button';
import { MonthName, Wrapper } from './styles';
import { IMonth } from './types';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const Month: React.FC<IMonth> = ({ date, setDate, setScrollDate }) => {
  const monthName = MONTHS[date.getMonth()] + ' ' + date.getFullYear();
  return (
    <Wrapper>
      <Button
        onClick={() => {
          setDate(new Date(date.setMonth(date.getMonth() - 1)));
          setScrollDate((prev) => !prev);
        }}
        fontSize="1.2em"
      >
        ❮
      </Button>
      <MonthName>{monthName}</MonthName>
      <Button
        onClick={() => {
          setDate(new Date(date.setMonth(date.getMonth() + 1)));
          setScrollDate((prev) => !prev);
        }}
        fontSize="1.2em"
      >
        ❯
      </Button>
    </Wrapper>
  );
};
