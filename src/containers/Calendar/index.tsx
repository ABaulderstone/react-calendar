import MonthlyCalendar from '../../components/MonthlyCalendar';
import WeeklyCalendar from '../../components/WeeklyCalendar';
import { useMinScreen } from '../../context/MinScreenProvider';

export interface CalendarProps {
  currentDate: Date;
  onCellClick: () => unknown;
}

const Calendar = ({ currentDate, onCellClick }: CalendarProps) => {
  const { min } = useMinScreen();
  return (
    <>
      {min`md` && (
        <MonthlyCalendar currentDate={currentDate} onCellClick={onCellClick} />
      )}
      {min`sm` && !min`md` && <WeeklyCalendar />}
    </>
  );
};

export default Calendar;
