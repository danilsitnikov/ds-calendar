import React from 'react';
import { DSCalendar } from './DSCalendar';

const App: React.FC = () => {
    return (
        <div className="App">
            <DSCalendar />
            <DSCalendar twoMonths />
        </div>
    );
};

export default App;
