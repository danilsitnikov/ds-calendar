import React, { useState } from 'react';
import './styles.scss';
import getDates from './getDates';
import moment, { Moment } from 'moment';
import { Header } from './components/Header';

interface PropValues {
    startDate: Moment;
    endDate: Moment;
    currentMonth: Moment;
    dates: Moment[];
}
const { dates, currentMonth } = getDates();
const defaultValues: PropValues = {
    startDate: moment(),
    endDate: moment(),
    currentMonth,
    dates,
};
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const isBeforeAfterDate = (date: Moment) =>
    date.format('MM') !== currentMonth.format('MM') ? 'past' : null;

export const DSCalendar = () => {
    const [state, setState] = useState(defaultValues);

    const isSelectedDate = (date: Moment) => {
        if (
            moment(date).isBetween(state.startDate, state.endDate) ||
            date.format('DD/MM/YYYY') === state.startDate.format('DD/MM/YYYY') ||
            date.format('DD/MM/YYYY') === state.endDate.format('DD/MM/YYYY')
        ) {
            return 'selected';
        }
    };

    const onSelectDay = (date: any) => {
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

    return (
        <div className="dsc">
            <Header currentMonth={currentMonth} />
            <div className="dsc-body">
                {weekDays.map((day: string) => (
                    <div className="dsc-item weekday" key={day}>
                        {day[0]}
                    </div>
                ))}
                {state.dates.map((date: Moment) => (
                    <div
                        key={date.format('DDMMYYY')}
                        className={['dsc-item', isBeforeAfterDate(date), isSelectedDate(date)].join(
                            ' ',
                        )}
                        onClick={() => onSelectDay(date)}
                    >
                        {date.format('D')}
                    </div>
                ))}
            </div>
        </div>
    );
};
