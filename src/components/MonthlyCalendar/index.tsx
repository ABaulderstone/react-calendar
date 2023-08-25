import Table from '../Table';
import {
  CalendarHeader,
  Container,
  MonthArrow,
  MonthHeading,
  MonthSelector,
} from './styled';

import { MonthlyCalendarCell } from './MonthlyCalendarCell';
interface MonthlyCalendarProps {
  currentDate: Date;
  dates: Date[][];
  monthNumber: number;
  month: string;
  year: number;
  incrementMonth: () => unknown;
  decrementMonth: () => unknown;
  onCellClick: () => unknown;
}
function MonthlyCalendar({
  currentDate,
  dates,
  monthNumber,
  month,
  year,
  incrementMonth,
  decrementMonth,
  onCellClick,
}: MonthlyCalendarProps) {
  return (
    <Container>
      <MonthSelector>
        <MonthArrow onClick={() => decrementMonth()}>⟵</MonthArrow>
        <MonthHeading>
          {month} - {year}
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
                  isCurrentMonth={date.getMonth() === monthNumber}
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
