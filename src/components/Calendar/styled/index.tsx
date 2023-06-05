import tw from 'twin.macro';
import Table from '../../Table';

export const Container = tw.div`container mx-auto px-4 flex flex-col gap-4`;
export const CalendarTable = ({ children, ...props }: any) => {
  return (
    <Table {...props} tw='w-full table-fixed'>
      {children}
    </Table>
  );
};

export const CalendarHeader = tw(Table.Header)`w-[calc(100%/7)]`;
export const CalendarCell = tw(
  Table.Data
)`w-[calc(100%/7)] sm:h-16 md:h-24 lg:h-32 text-left align-top`;

export const MonthHeading = tw.h2`lg:text-2xl sm:text-xl md:text-xl xl:text-3xl`;
export const MonthSelector = tw.div`flex justify-around`;
export const MonthArrow = tw.span`lg:text-2xl sm:text-xl md:text-xl xl:text-3xl`;
