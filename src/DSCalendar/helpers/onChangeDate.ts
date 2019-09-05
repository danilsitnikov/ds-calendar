import moment, { Moment } from 'moment';
import { getDates } from './getDates';

export const onChangeDate = (type: string, state: any, setState: any) => {
    const nextMonth =
        type === 'next'
            ? moment(state.dates.current.month).add(1, 'months')
            : moment(state.dates.current.month).subtract(1, 'months');

    const dates = getDates(nextMonth);

    setState({ ...state, dates });
};
