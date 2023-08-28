import Table from '../Table';

import {
  CalendarHeader,
  MonthArrow,
  MonthHeading,
  MonthSelector,
} from './styled';

import { MonthlyCalendarCell } from './MonthlyCalendarCell';
import { CalendarProps } from '../../containers/Calendar';
import useDate from '../../hooks/useDate';

function LargeCalendar({ currentDate, onCellClick }: CalendarProps) {
  const {
    dates,
    selectedMonth,
    selectedMonthNumber,
    incrementMonth,
    decrementMonth,
    selectedYear,
  } = useDate(currentDate);

  return (
    <>
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
    </>
  );
}

export default LargeCalendar;
