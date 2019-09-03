import React from 'react';

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const WeekDays = () => (
    <>
        {weekDays.map((day: string) => (
            <div className="dsc-item weekday" key={day}>
                {day[0]}
            </div>
        ))}
    </>
);
