import { startOfDay } from "date-fns";

export const getPastWeekDates = (): Date[] => {
  const today = startOfDay(new Date());
  const weekIntegers = [...Array(7).keys()];
  const days = weekIntegers.map((i) => {
    return getPreviousDate(today, i);
  });

  return days;
};

const getPreviousDate = (today: Date, noOfDaysAgo: number): Date => {
  const previousDay = new Date(today);
  previousDay.setDate(today.getDate() - noOfDaysAgo);
  return previousDay;
};

export const isTodayOrYesterday = (date: Date) => {
  const today = new Date();
  const dateDifference = today.getDate() - date.getDate();

  if (dateDifference === 0) {
    return "Today";
  } else if (dateDifference === 1) {
    return "Yesterday";
  } else {
    return null;
  }
};
