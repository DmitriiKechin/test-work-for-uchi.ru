export const getTasksStateDefault = (daysNumber: number): boolean[][] => {
  const column: boolean[] = [];
  for (let i = 0; i < daysNumber; i++) {
    column.push(false);
  }
  const result: boolean[][] = [];
  for (let i = 0; i < 14; i++) {
    result.push([...column]);
  }
  return result;
};
