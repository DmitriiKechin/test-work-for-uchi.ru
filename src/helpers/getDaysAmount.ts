export const getDaysAmount = (date: Date): number => {
  const dateCopy = new Date(date);
  const month = dateCopy.getMonth();

  dateCopy.setMonth(month + 1);
  dateCopy.setDate(0);

  return dateCopy.getDate();
};
