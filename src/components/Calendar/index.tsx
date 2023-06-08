import Table from '../Table';
import {
  CalendarHeader,
  Container,
  MonthArrow,
  MonthHeading,
  MonthSelector,
} from './styled';

import { CalendarCell } from './CalendarCell';
interface CalendarProps {
  currentDate: Date;
  dates: Date[][];
  monthNumber: number;
  month: string;
  year: number;
  incrementMonth: () => unknown;
  decrementMonth: () => unknown;
  onCellClick: () => unknown;
}
function Calendar({
  currentDate,
  dates,
  monthNumber,
  month,
  year,
  incrementMonth,
  decrementMonth,
  onCellClick,
}: CalendarProps) {
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
                <CalendarCell
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

export default Calendar;
