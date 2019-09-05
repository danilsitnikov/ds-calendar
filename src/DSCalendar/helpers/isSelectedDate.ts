import moment, { Moment } from 'moment';

export const isSelectedDate = (state: any, date: Moment) => {
    if (
        moment(date).isBetween(state.startDate, state.endDate) ||
        date.format('DD/MM/YYYY') === state.startDate.format('DD/MM/YYYY') ||
        date.format('DD/MM/YYYY') === state.endDate.format('DD/MM/YYYY')
    ) {
        return true;
    }

    return false;
};
