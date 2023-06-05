import tw from 'twin.macro';
import Table from '../../Table';

export const Container = tw.div`container mx-auto px-4`;
export const CalendarTable = ({ children, ...props }: any) => {
  return (
    <Table {...props} tw='w-full table-fixed'>
      {children}
    </Table>
  );
};

export const CalendarHeader = tw(Table.Header)`w-[calc(100%/7)]`;
export const CalendarCell = tw(Table.Data)`w-[calc(100%/7)]`;
