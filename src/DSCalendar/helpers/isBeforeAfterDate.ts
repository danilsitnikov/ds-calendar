import { Moment } from 'moment';

export const isBeforeAfterDate = (currentMonth: Moment, date: Moment) =>
    date.format('MM') !== currentMonth.format('MM') ? 'past' : null;
