import tw from 'twin.macro';
import { isSameDate } from '../../utils/date/same-date';

interface CellProps {
  key: number;
  selectedMonthNumber: number;
  date: Date;
  onClick: () => void;
}
const Cell = ({ date, onClick, selectedMonthNumber }: CellProps) => {
  const isToday = isSameDate(date, new Date());
  const isSelectedMonth = date.getMonth() === selectedMonthNumber;
  return (
    <td
      onClick={onClick}
      css={[
        tw`text-center`,
        !isSelectedMonth && tw`bg-slate-200`,
        isToday && tw`text-purple-800`,
      ]}
    >
      {date.getDate()}
    </td>
  );
};

export default Cell;
