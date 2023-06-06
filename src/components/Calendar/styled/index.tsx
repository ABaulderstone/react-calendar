import tw from 'twin.macro';
import Table from '../../Table';

export const Container = tw.div`container mt-2 mx-auto px-4 flex flex-col gap-8`;
export const CalendarTable = ({ children, ...props }: any) => {
  return (
    <Table {...props} tw='w-full table-fixed'>
      {children}
    </Table>
  );
};

export const CalendarCell = ({ currentMonth, date }: any) => {
  return (
    <td
      css={[
        tw`border border-gray-700 p-3 w-[calc(100%/7)] h-24 md:h-32 lg:h-48 text-left align-top`,
        !currentMonth && tw`bg-slate-200`,
      ]}
    >
      {date.getDate()}
    </td>
  );
};

export const CalendarHeader = tw(Table.Header)`w-[calc(100%/7)]`;

export const MonthHeading = tw.h2`lg:text-2xl sm:text-xl md:text-xl xl:text-3xl`;
export const MonthSelector = tw.div`flex justify-around`;
export const MonthArrow = tw.span`lg:text-2xl sm:text-xl md:text-xl xl:text-3xl`;
