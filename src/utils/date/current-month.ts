import Months from '../../../types/months.d';

export const getMonth = (index: number): Months => {
  const months = [
    Months.JAN,
    Months.FEB,
    Months.MAR,
    Months.APR,
    Months.MAY,
    Months.JUN,
    Months.JUL,
    Months.AUG,
    Months.SEP,
    Months.OCT,
    Months.NOV,
    Months.DEC,
  ];
  return months[index];
};
