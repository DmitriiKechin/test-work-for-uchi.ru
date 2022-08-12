export const parse2Date = (date: string): Date | undefined => {
  const dateISO = date.split(' ').join('T');

  const dateResult = new Date(dateISO);

  if (!dateResult.getDate()) {
    return;
  }

  return dateResult;
};
