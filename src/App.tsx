import { useEffect, useState } from 'react';
import Calendar from './components/Calendar';
import Months from '../types/months.d';
import { getMonth } from './utils/date/current-month';

import { getCalendarReadyDates } from './utils/date/get-calendar-ready-dates';
import Modal from './components/Modal';

function App() {
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState<Months>(Months.BLANK);
  const [selectedMonthNumber, setSelectedMonthNumber] = useState<number>(
    currentDate.getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    currentDate.getFullYear()
  );
  const [dates, setDates] = useState<Date[][]>([]);
  const [createEventModalShown, setCreateEventModalShown] =
    useState<boolean>(false);

  const onCreateEventModalClose = () => {
    setCreateEventModalShown(false);
  };
  const onCreateEventModalOpen = () => {
    setCreateEventModalShown(true);
  };
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
    const datesArr = getCalendarReadyDates(selectedMonthNumber, selectedYear);
    console.log(datesArr);
    setSelectedMonth(month);
    setDates(datesArr);
  }, [selectedMonthNumber]);

  return (
    <>
      <Calendar
        currentDate={currentDate}
        dates={dates}
        month={selectedMonth}
        monthNumber={selectedMonthNumber}
        year={selectedYear}
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
        onCellClick={onCreateEventModalOpen}
      />
      {createEventModalShown && (
        <Modal
          title='Create Event'
          onClose={onCreateEventModalClose}
          shown={createEventModalShown}
        >
          Meep
        </Modal>
      )}
    </>
  );
}

export default App;
