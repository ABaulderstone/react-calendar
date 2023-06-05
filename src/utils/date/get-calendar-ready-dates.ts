import { chunkArray } from '../array/chunk';
import { getDatesInMonth } from './get-dates-in-month';
import { padSurroundingDates } from './pad-surrounding-dates';

export const getCalendarReadyDates = (
  month: number,
  year: number
): Date[][] => {
  const rawDates = getDatesInMonth(month, year);
  const paddedDates = padSurroundingDates(rawDates);
  return chunkArray(paddedDates, 7);
};
