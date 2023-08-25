import MonthlyCalendar from '../../components/MonthlyCalendar';
import WeeklyCalendar from '../../components/WeeklyCalendar';
import { useMinScreen } from '../../context/MinScreenProvider';

export interface CalendarProps {
  currentDate: Date;
  onCellClick: () => unknown;
}

const Calendar = ({ currentDate, onCellClick }: CalendarProps) => {
  const { min } = useMinScreen();
  console.log(min);
  return (
    <>
      {min`md` && (
        <MonthlyCalendar currentDate={currentDate} onCellClick={onCellClick} />
      )}
      {!min`md` && <WeeklyCalendar />}
    </>
  );
};

export default Calendar;
