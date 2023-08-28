import { CalendarProps } from '../../containers/Calendar';
import useDate from '../../hooks/useDate';
import SmallCalendar from '../SmallCalendar';
import {
  DailyCalendarContainer,
  DailyCalendarHeading,
  SmallCalenderContainer,
} from './styled';

const DailyCalendar = ({ currentDate }: CalendarProps) => {
  const { dates, selectedMonth, selectedMonthNumber } = useDate(currentDate);
  return (
    <DailyCalendarContainer>
      <DailyCalendarHeading>{selectedMonth}</DailyCalendarHeading>
      <SmallCalenderContainer>
        <SmallCalendar
          dates={dates}
          selectedMonthNumber={selectedMonthNumber}
        />
      </SmallCalenderContainer>
    </DailyCalendarContainer>
  );
};

export default DailyCalendar;
