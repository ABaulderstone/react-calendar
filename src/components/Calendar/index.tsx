import Table from '../Table';
import {
  CalendarCell,
  CalendarHeader,
  Container,
  MonthArrow,
  MonthHeading,
  MonthSelector,
} from './styled';
interface CalendarProps {
  days: number[][];
  month: string;
  year: number;
}
function Calendar({ days, month, year }: CalendarProps) {
  return (
    <Container>
      <MonthSelector>
        <MonthArrow>⟵</MonthArrow>
        <MonthHeading>
          {month} - {year}
        </MonthHeading>
        <MonthArrow>⟶</MonthArrow>
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
          {days.map((row: number[], rIndex: number) => (
            <Table.Row key={rIndex}>
              {row.map((day: number, dIndex: number) => (
                <CalendarCell key={dIndex}>{day}</CalendarCell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default Calendar;
