import React from 'react';
import tw from 'twin.macro';
{
  /* <Table.Body>
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
</Table.Body> */
}

interface SmallCalendarProps {
  dates: Date[][];
}
const Cell = tw.td`text-center`;
const SmallCalendar = ({ dates }: SmallCalendarProps) => {
  return (
    <>
      <table>
        <thead>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </thead>
        <tbody>
          {dates.map((row: Date[], rIndex: number) => (
            <tr key={`row-${rIndex}`}>
              {row.map((date: Date, index: number) => (
                <Cell key={index}>{date.getDate()}</Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SmallCalendar;
