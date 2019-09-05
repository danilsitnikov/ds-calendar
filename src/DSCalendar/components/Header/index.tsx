import React from 'react';
import { onChangeDate } from '../../helpers/onChangeDate';

interface HeaderProps {
    state: any;
    setState: any;
}

export const Header: React.FC<HeaderProps> = ({ state, setState }) => (
    <div className="dsc-switcher">
        <div className="dsc-switcher-prev" onClick={() => onChangeDate('prev', state, setState)}>
            {'<'}
        </div>
        <div className="dsc-switcher-next" onClick={() => onChangeDate('next', state, setState)}>
            {'>'}
        </div>
    </div>
);
