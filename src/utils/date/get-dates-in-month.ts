export const getDatesInMonth = (month: number, year: number): Date[] => {
  const dates = [];
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    dates.push(new Date(date));
  }

  return dates;
};
