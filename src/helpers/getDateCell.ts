export const getDateCell = (
  date: Date,
  activeCell: number[]
): { dateMin: Date; dateMax: Date } => {
  const dateMin = new Date(date);
  const dateMax = new Date(date);

  dateMin.setHours(activeCell[0] + 8);
  dateMax.setHours(activeCell[0] + 8);

  dateMin.setMinutes(Math.floor(activeCell[1] * 8.57143));
  dateMax.setMinutes(Math.floor((activeCell[1] + 1) * 8.57143));

  dateMin.setSeconds(Math.floor(((activeCell[1] * 8.57143) % 1) * 60));
  dateMax.setSeconds(Math.floor((((activeCell[1] + 1) * 8.57143) % 1) * 60));

  return { dateMin, dateMax };
};
