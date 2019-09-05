import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { getDates } from './helpers/getDates';
import { Header } from './components/Header';
import { Month } from './components/Month';
import './styles.scss';

interface DSCalendarProps {
    startDate?: Moment | string;
    endDate?: Moment | string;
    twoMonths?: boolean;
    onChange?: (values: Moment[]) => void;
}

export const DSCalendar: React.FC<DSCalendarProps> = ({ twoMonths }) => {
    const defaultValues = {
        startDate: moment(),
        endDate: moment(),
        dates: getDates(),
    };
    const [state, setState] = useState(defaultValues);
    const { current, next } = state.dates;

    return (
        <div className="dsc">
            <Header state={state} setState={setState} />
            <div className="dsc-body">
                <Month data={current} state={state} setState={setState} />
                {twoMonths && <Month data={next} state={state} setState={setState} />}
            </div>
        </div>
    );
};
