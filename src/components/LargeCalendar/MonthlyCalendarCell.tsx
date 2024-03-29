import tw from 'twin.macro';
import { isSameDate } from '../../utils/date/same-date';

export interface MonthlyCalendarCellProps {
  key: number;
  selectedMonthNumber: number;
  date: Date;
  currentDate: Date;
  onClick: () => unknown;
}
export const MonthlyCalendarCell = ({
  selectedMonthNumber,
  date,
  currentDate,
  onClick,
}: MonthlyCalendarCellProps) => {
  const today = isSameDate(date, currentDate);
  const isSelectedMonth = selectedMonthNumber === date.getMonth();
  return (
    <td
      onClick={onClick}
      css={[
        tw`border border-gray-700  w-[calc(100%/7)] h-24 md:h-32 lg:h-48 text-left align-top`,
        !isSelectedMonth && tw`bg-slate-200`,
      ]}
    >
      <div
        css={[
          tw`m-3 flex h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full  text-center`,
          today && tw`bg-purple-800`,
        ]}
      >
        <span css={[today && tw`text-white`]}>{date.getDate()}</span>
      </div>
    </td>
  );
};
