import moment, { Moment } from 'moment';
import { getDates } from './getDates';

export const onChangeDate = (type: string, state: any, setState: any) => {
    const nextMonth =
        type === 'next'
            ? moment(state.currentMonth).add(1, 'months')
            : moment(state.currentMonth).subtract(1, 'months');

    const { dates, currentMonth } = getDates(nextMonth);

    setState({ ...state, dates, currentMonth });
};
