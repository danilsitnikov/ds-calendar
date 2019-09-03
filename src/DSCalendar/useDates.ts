import { useState } from 'react';
import moment from 'moment';
import getDates from './getDates';

export const useDates = () => {
    const { dates, currentMonth } = getDates();
    const defaultValues = {
        startDate: moment(),
        endDate: moment(),
        currentMonth,
        dates,
    };
    const [state, setState] = useState(defaultValues);

    return [state, setState];
};
