import React from 'react';
import { WeekDays } from '../WeekDays';
import { isBeforeAfterDate } from '../../helpers/isBeforeAfterDate';
import { isSelectedDate } from '../../helpers/isSelectedDate';
import { onSelectDay } from '../../helpers/onSelectDay';
import { Moment } from 'moment';

interface MonthProps {
    data: {
        month: Moment;
        cells: Moment[];
    };
    state: any;
    setState: any;
}

export const Month: React.FC<MonthProps> = ({ data, state, setState }) => (
    <div className="dsc-month">
        <div className="dsc-month__title">{data.month.format('MMMM YYYY')}</div>
        <WeekDays />
        {data.cells.map((date: Moment) => {
            const shouldRender = !isBeforeAfterDate(data.month, date);
            const isSelected = shouldRender && isSelectedDate(state, date);
            const selectedClass = isSelected ? 'selected' : null;
            const ghostClass = !shouldRender ? 'ghost' : null;

            return (
                <div
                    key={date.format('DDMMYYY')}
                    className={['dsc-item', selectedClass, ghostClass].join(' ')}
                    onClick={() => onSelectDay(state, date, setState, !shouldRender)}
                >
                    {shouldRender ? date.format('D') : null}
                </div>
            );
        })}
    </div>
);
