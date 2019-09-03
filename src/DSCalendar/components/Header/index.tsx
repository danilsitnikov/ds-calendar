import React from 'react';
import { Moment } from 'moment';

export const Header = ({ currentMonth }: { currentMonth: Moment }) => (
    <div className="dsc-header">
        <div className="dsc-header-prev">{'<'}</div>
        <div>{currentMonth.format('MMM YYYY')}</div>
        <div className="dsc-header-next">{'>'}</div>
    </div>
);
