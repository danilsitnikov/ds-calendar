import React, { useState } from 'react';
import './styles.scss';
import getDates from './getDates';
import moment, { Moment } from 'moment';
import { Header } from './components/Header';
import { isSelectedDate } from './helpers/isSelectedDate';
import { onSelectDay } from './helpers/onSelectDay';
import { WeekDays } from './components/WeekDays';
import { isBeforeAfterDate } from './helpers/isBeforeAfterDate';

const { dates, currentMonth } = getDates();
const defaultValues = {
    startDate: moment(),
    endDate: moment(),
    currentMonth,
    dates,
};

export const DSCalendar = () => {
    const [state, setState] = useState(defaultValues);

    return (
        <div className="dsc">
            <Header currentMonth={currentMonth} />
            <div className="dsc-body">
                <WeekDays />
                {state.dates.map((date: Moment) => (
                    <div
                        key={date.format('DDMMYYY')}
                        className={[
                            'dsc-item',
                            isBeforeAfterDate(state, date),
                            isSelectedDate(state, date),
                        ].join(' ')}
                        onClick={() => onSelectDay(state, date, setState)}
                    >
                        {date.format('D')}
                    </div>
                ))}
            </div>
        </div>
    );
};
