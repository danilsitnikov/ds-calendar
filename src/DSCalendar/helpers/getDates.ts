import moment, { Moment } from 'moment';

export type SDF = Moment | null;

const toArrayByLength = (length: number) => Array.from({ length }, (x, i) => i + 1);
const getMonthDates = (arr: number[], date: Moment) =>
    arr.map((dayNumber: number) => moment(date).date(dayNumber));

const getDateBeforeAndAfterMonth = (
    currentMonthDates: Moment[],
    currentMonth: Moment,
    currentMonthLength: number,
) => {
    const currentMonthFirstDay = parseInt(currentMonth.startOf('month').format('E'), 10);
    const currentMonthLastDay = parseInt(currentMonth.endOf('month').format('E'), 10);

    const prevMonth = moment(currentMonth).subtract(1, 'months');
    const prevMonthLength = prevMonth.daysInMonth();
    const daysInPrevMonth = toArrayByLength(prevMonthLength);
    const prevMonthDates = getMonthDates(daysInPrevMonth, prevMonth);

    const nextMonth = moment(currentMonth).add(1, 'months');
    const nextMonthLength = nextMonth.daysInMonth();
    const daysInNextMonth = toArrayByLength(nextMonthLength);
    const nextMonthDates = getMonthDates(daysInNextMonth, nextMonth);

    const currentMonthDatesBefore =
        currentMonthFirstDay !== 1
            ? prevMonthDates.slice(prevMonthLength - currentMonthFirstDay + 1)
            : [];

    const currentMonthDatesAfter =
        currentMonthLastDay !== 0 ? nextMonthDates.slice(0, 7 - currentMonthLastDay) : [];

    return [...currentMonthDatesBefore, ...currentMonthDates, ...currentMonthDatesAfter];
};

export const getDates = (payload: Moment = moment()) => {
    const currentMonth = moment(payload);
    const currentMonthLength = moment(payload).daysInMonth();
    const daysInCurrentMonth = toArrayByLength(currentMonthLength);
    const currentMonthDates = getMonthDates(daysInCurrentMonth, currentMonth);
    const dates = getDateBeforeAndAfterMonth(currentMonthDates, currentMonth, currentMonthLength);

    return { dates, currentMonth };
};
