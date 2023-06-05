import Table from '../Table';
import { Container } from './styled';
interface CalendarProps {
  days: number[][];
}
function Calendar({ days }: CalendarProps) {
  return (
    <Container>
      <Table tw='grid grid-cols-7 grid-flow-row'>
        <Table.Head>
          <Table.Row>
            <Table.Header>Sunday</Table.Header>
            <Table.Header>Monday</Table.Header>
            <Table.Header>Tuesday</Table.Header>
            <Table.Header>Wednesday</Table.Header>
            <Table.Header>Thursday</Table.Header>
            <Table.Header>Friday</Table.Header>
            <Table.Header>Saturday</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {days.map((row: number[], rIndex: number) => (
            <Table.Row key={rIndex}>
              {row.map((day: number, dIndex: number) => (
                <Table.Data key={dIndex}>{day}</Table.Data>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default Calendar;
