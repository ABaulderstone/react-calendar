import Cell from './Cell';
interface SmallCalendarProps {
  dates: Date[][];
  selectedMonthNumber: number;
}

const SmallCalendar = ({ dates, selectedMonthNumber }: SmallCalendarProps) => {
  return (
    <>
      <table tw='border border-gray-700 border-collapse'>
        <thead>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((row: Date[], rIndex: number) => (
            <tr key={`row-${rIndex}`}>
              {row.map((date: Date, index: number) => (
                <Cell
                  key={index}
                  date={date}
                  selectedMonthNumber={selectedMonthNumber}
                  onClick={() => console.log('You clicked a cell')}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SmallCalendar;
