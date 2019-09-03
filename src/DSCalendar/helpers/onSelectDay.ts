import moment, { Moment } from 'moment';

export const onSelectDay = (state: any, date: Moment, setState: any) => {
    if (
        date.format('DD/MM/YYYY') === state.startDate.format('DD/MM/YYYY') ||
        date.format('DD/MM/YYYY') === state.endDate.format('DD/MM/YYYY')
    ) {
        setState({ ...state, startDate: moment(date), endDate: moment(date) });
        return;
    }

    if (moment(date).isAfter(state.startDate)) {
        setState({ ...state, endDate: moment(date) });
        return;
    }

    setState({ ...state, startDate: moment(date), endDate: moment(date) });

    return;
};
