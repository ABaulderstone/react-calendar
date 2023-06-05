import Table from '../Table';
import { Container } from './styled';

function Calendar() {
  return (
    <Container>
      <Table>
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
      </Table>
    </Container>
  );
}

export default Calendar;
