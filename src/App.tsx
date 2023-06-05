import { useEffect, useState } from 'react';
import Calendar from './components/Calendar';
import Months from '../types/months.d';
import { getMonth } from './utils/date/current-month';

function App() {
  const currentDay = new Date();
  const currentMonth = getMonth(currentDay);
  const [selectedMonth, setSelectedMonth] = useState<Months>(currentMonth);

  useEffect(() => {
    console.log(currentMonth);
    console.log(currentDay);
  }, [selectedMonth]);
  const days = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35],
  ];
  return (
    <>
      <Calendar days={days} month={selectedMonth} />
    </>
  );
}

export default App;
