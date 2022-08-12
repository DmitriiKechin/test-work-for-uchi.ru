import React from 'react';
import { getDateCell } from '../../../helpers/getDateCell';
import { Button } from '../button/button';
import { Wrapper } from './styles';
import { IFooter } from './types';

export const Footer: React.FC<IFooter> = ({
  date,
  activeCell,
  tasksMatrix,
  setTaskTimeList,
  setDate,
  setScrollDate,
}) => {
  const clickHandler = () => {
    const { dateMin, dateMax } = getDateCell(date, activeCell);

    setTaskTimeList((prev) => {
      return prev.filter(
        (dateTask) => dateTask < dateMin || dateTask >= dateMax
      );
    });
  };
  return (
    <Wrapper>
      <Button
        onClick={() => {
          setDate(new Date());
          setScrollDate((prev) => !prev);
        }}
      >
        Today
      </Button>

      {tasksMatrix[activeCell[0]][activeCell[1]] && (
        <Button
          onClick={() => {
            clickHandler();
          }}
        >
          Delete
        </Button>
      )}
    </Wrapper>
  );
};
