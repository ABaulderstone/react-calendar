import Table from '../Table';
import {
  CalendarCell,
  CalendarHeader,
  CalendarMonth,
  Container,
} from './styled';
interface CalendarProps {
  days: number[][];
  month: string;
}
function Calendar({ days, month }: CalendarProps) {
  return (
    <Container>
      <CalendarMonth>{month}</CalendarMonth>
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
