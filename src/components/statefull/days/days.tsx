import React, { useLayoutEffect, useRef } from 'react';
import { Day, DateNumber, WeekDay, Wrapper, DaysScroll } from './styles';
import { IDays } from './types';

const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const Days: React.FC<IDays> = ({ date, setDate, scrollDate }) => {
  const dayRef = useRef<HTMLDivElement>(null);
  const dateCopy: Date = new Date(date);
  const days: JSX.Element[] = [];

  const mounth = dateCopy.getMonth();

  const clickHandler = (index: number) => {
    const dateCopy = new Date(date);
    dateCopy.setDate(index);
    setDate(dateCopy);
  };

  for (let i = 1; i < 32; i++) {
    dateCopy.setDate(i);

    if (dateCopy.getMonth() !== mounth) {
      break;
    }

    days.push(
      <Day ref={date.getDate() === i ? dayRef : null} key={i}>
        <WeekDay>{WEEK_DAYS[dateCopy.getDay()]}</WeekDay>
        <DateNumber
          isActive={date.getDate() === i}
          onClick={() => {
            clickHandler(i);
          }}
        >
          {i}
        </DateNumber>
      </Day>
    );
  }

  useLayoutEffect(() => {
    if (!dayRef.current) {
      return;
    }
    dayRef.current.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  }, [scrollDate]);

  return (
    <Wrapper>
      <DaysScroll>{days}</DaysScroll>
    </Wrapper>
  );
};
