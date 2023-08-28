import LargeCalendar from '../../components/LargeCalendar';
import DailyCalendar from '../../components/DailyCalendar';
import { useMinScreen } from '../../context/MinScreenProvider';

export interface CalendarProps {
  currentDate: Date;
  onCellClick: () => unknown;
}

const Calendar = ({ currentDate, onCellClick }: CalendarProps) => {
  const { min } = useMinScreen();
  min;
  return (
    <>
      {min`md` && (
        <LargeCalendar currentDate={currentDate} onCellClick={onCellClick} />
      )}
      {!min`md` && (
        <DailyCalendar currentDate={currentDate} onCellClick={onCellClick} />
      )}
    </>
  );
};

export default Calendar;
