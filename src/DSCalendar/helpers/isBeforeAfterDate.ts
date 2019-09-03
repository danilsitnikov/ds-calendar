import { Moment } from 'moment';

export const isBeforeAfterDate = ({ currentMonth }: any, date: Moment) =>
    date.format('MM') !== currentMonth.format('MM') ? 'past' : null;
