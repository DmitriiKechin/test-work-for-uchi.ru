import React from 'react';
import { Cell, CellWrapper, Table, Time, Times, Wrapper } from './styles';
import { ITimetable } from './types';

export const Timetable: React.FC<ITimetable> = ({
  tasksMatrix,
  activeCell,
  setActiveCell,
}) => {
  const times = [];
  for (let i = 0; i < 14; i++) {
    times.push(<Time key={i}>{i < 2 ? '0' + (i + 8) : i + 8}:00</Time>);
  }

  const tasks: JSX.Element[] = [];
  tasksMatrix.forEach((row, rowIndex) =>
    row.forEach((cell, cellIndex) => {
      tasks.push(
        <CellWrapper key={rowIndex + '_' + cellIndex}>
          {' '}
          <Cell
            isFilled={cell}
            isActive={
              rowIndex === activeCell[0] && cellIndex === activeCell[1] && cell
            }
            onClick={() => {
              setActiveCell([rowIndex, cellIndex]);
            }}
          />
        </CellWrapper>
      );
    })
  );

  return (
    <Wrapper>
      <Times>{times}</Times>
      <Table>{tasks}</Table>
    </Wrapper>
  );
};
