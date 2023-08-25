import { CalendarProps } from '../../containers/Calendar';
import useDate from '../../hooks/useDate';
import SmallCalendar from '../SmallCalendar';
import { DailyCalendarContainer, SmallCalenderContainer } from './styled';

const DailyCalendar = ({ currentDate, onCellClick }: CalendarProps) => {
  const { dates } = useDate(currentDate);
  return (
    <DailyCalendarContainer>
      <SmallCalenderContainer>
        <SmallCalendar dates={dates} />
      </SmallCalenderContainer>
    </DailyCalendarContainer>
  );
};

export default DailyCalendar;
