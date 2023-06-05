export const padSurroundingDates = (dates: Date[]) => {
  let leftFill = dates[0].getDay();
  while (leftFill > 0) {
    const earliestDate = new Date(dates[0]);
    earliestDate.setDate(earliestDate.getDate() - 1);
    dates.unshift(earliestDate);
    leftFill--;
  }
  while (dates.length < 42) {
    const lastDate = new Date(dates[dates.length - 1]);
    lastDate.setDate(lastDate.getDate() + 1);
    dates.push(lastDate);
  }
  return dates;
};
