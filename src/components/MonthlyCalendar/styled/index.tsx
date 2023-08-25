import tw from 'twin.macro';
import Table from '../../Table';

export const Container = tw.div`container mt-2 mx-auto px-4 flex flex-col gap-8`;

export const CalendarHeader = tw(Table.Header)`w-[calc(100%/7)]`;

export const MonthHeading = tw.h2`lg:text-2xl sm:text-xl md:text-xl xl:text-3xl`;
export const MonthSelector = tw.div`flex justify-around`;
export const MonthArrow = tw.span`lg:text-2xl sm:text-xl md:text-xl xl:text-3xl`;
export const CellContent = tw.div`flex flex-col`;
