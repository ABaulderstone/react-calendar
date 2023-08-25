import Table from '../Table';
import Months from '../../../types/months.d';
import { getCalendarReadyDates } from '../../utils/date/get-calendar-ready-dates';
import { useEffect, useState } from 'react';
import {
  CalendarHeader,
  Container,
  MonthArrow,
  MonthHeading,
  MonthSelector,
} from './styled';

import { MonthlyCalendarCell } from './MonthlyCalendarCell';
import { getMonth } from '../../utils/date/current-month';
import { CalendarProps } from '../../containers/Calendar';

function MonthlyCalendar({ currentDate, onCellClick }: CalendarProps) {
  const [selectedMonth, setSelectedMonth] = useState<Months>(Months.BLANK);
  const [selectedMonthNumber, setSelectedMonthNumber] = useState<number>(
    currentDate.getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    currentDate.getFullYear()
  );
  const [dates, setDates] = useState<Date[][]>([]);

  const monthNumber = currentDate.getMonth();

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
    setSelectedMonth(month);
    setDates(datesArr);
  }, [selectedMonthNumber]);

  return (
    <Container>
      <MonthSelector>
        <MonthArrow onClick={() => decrementMonth()}>⟵</MonthArrow>
        <MonthHeading>
          {selectedMonth} - {selectedYear}
        </MonthHeading>
        <MonthArrow onClick={() => incrementMonth()}>⟶</MonthArrow>
      </MonthSelector>
      <Table tw='w-full table-fixed'>
        <Table.Head>
          <Table.Row>
            <CalendarHeader>Su</CalendarHeader>
            <CalendarHeader>M</CalendarHeader>
            <CalendarHeader>Tu</CalendarHeader>
            <CalendarHeader>W</CalendarHeader>
            <CalendarHeader>Th</CalendarHeader>
            <CalendarHeader>Fr</CalendarHeader>
            <CalendarHeader>Sa</CalendarHeader>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {dates.map((row: Date[], rIndex: number) => (
            <Table.Row key={rIndex}>
              {row.map((date: Date, dIndex: number) => (
                <MonthlyCalendarCell
                  key={dIndex}
                  date={date}
                  selectedMonthNumber={selectedMonthNumber}
                  currentDate={currentDate}
                  onClick={onCellClick}
                />
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default MonthlyCalendar;
