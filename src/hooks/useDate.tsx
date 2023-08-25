import { useState, useEffect } from 'react';
import Months from '../../types/months.d';
import { getMonth } from '../utils/date/current-month';
import { getCalendarReadyDates } from '../utils/date/get-calendar-ready-dates';

const useDate = (initalDate: Date) => {
  const [dates, setDates] = useState<Date[][]>([]);
  const [selectedMonth, setSelectedMonth] = useState<Months>(Months.BLANK);
  const [selectedMonthNumber, setSelectedMonthNumber] = useState<number>(
    initalDate.getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    initalDate.getFullYear()
  );

  const incrementMonth = () => {
    if (selectedMonthNumber === 11) {
      setSelectedYear((current) => current + 1);
      setSelectedMonthNumber(0);
      return;
    }
    setSelectedMonthNumber((current) => current + 1);
  };

  const decrementMonth = () => {
    if (selectedMonthNumber === 0) {
      setSelectedYear((current) => current - 1);
      setSelectedMonthNumber(11);
      return;
    }
    setSelectedMonthNumber((current) => current - 1);
  };

  useEffect(() => {
    const month = getMonth(selectedMonthNumber);
    const dates = getCalendarReadyDates(selectedMonthNumber, selectedYear);
    setDates(dates);
    setSelectedMonth(month);
  }, [selectedMonthNumber]);

  return {
    dates,
    selectedMonth,
    selectedMonthNumber,
    selectedYear,
    incrementMonth,
    decrementMonth,
  };
};

export default useDate;
