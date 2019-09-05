import React from 'react';
import { Moment } from 'moment';
import { onChangeDate } from '../../helpers/onChangeDate';

interface HeaderProps {
    currentMonth: Moment;
    state: any;
    setState: any;
}

export const Header: React.FC<HeaderProps> = ({ currentMonth, state, setState }) => (
    <div className="dsc-header">
        <div className="dsc-header-prev" onClick={() => onChangeDate('prev', state, setState)}>
            {'<'}
        </div>
        <div>{currentMonth.format('MMM YYYY')}</div>
        <div className="dsc-header-next" onClick={() => onChangeDate('next', state, setState)}>
            {'>'}
        </div>
    </div>
);
