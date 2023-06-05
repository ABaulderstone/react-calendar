import { useEffect, useState } from 'react';
import Calendar from './components/Calendar';
import Months from '../types/months.d';
import { getMonth } from './utils/date/current-month';

function App() {
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState<Months>(Months.BLANK);
  const [selectedMonthNumber, setSelectedMonthNumber] = useState<number>(
    currentDate.getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    currentDate.getFullYear()
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
    setSelectedMonth(month);
  }, [selectedMonthNumber]);

  const days = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35],
  ];
  return (
    <>
      <Calendar
        days={days}
        month={selectedMonth}
        year={selectedYear}
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
      />
    </>
  );
}

export default App;
