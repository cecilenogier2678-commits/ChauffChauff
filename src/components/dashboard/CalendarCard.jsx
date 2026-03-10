import React from 'react';
import './CalendarCard.css';
import { ChevronDown } from 'lucide-react';

const CalendarCard = () => {
    // Simple representation of a calendar grid
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="card card-dark calendar-card">
            <div className="calendar-header">
                <h2 className="card-title-light">Planning des interventions</h2>
                <div className="month-selector">
                    Avril <ChevronDown size={14} />
                </div>
            </div>

            <div className="calendar-grid">
                <div className="weekdays">
                    {days.map((day, idx) => (
                        <div key={idx} className="weekday">{day}</div>
                    ))}
                </div>
                <div className="dates">
                    {dates.map((date, idx) => {
                        // Simulate status for certain dates
                        let statusClass = '';
                        if (date === 10) statusClass = 'date-today';
                        else if ([4, 8].includes(date)) statusClass = 'date-completed';
                        else if ([12, 18, 24].includes(date)) statusClass = 'date-planned';
                        else if (date === 15) statusClass = 'date-urgent';

                        return (
                            <div key={idx} className={`date ${statusClass}`}>
                                {date}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="calendar-legend">
                <div className="legend-item"><span className="dot dot-today"></span> Aujourd’hui</div>
                <div className="legend-item"><span className="dot dot-completed-light"></span> Terminé</div>
                <div className="legend-item"><span className="dot dot-planned-light"></span> Planifié</div>
                <div className="legend-item"><span className="dot dot-urgent"></span> Urgent</div>
            </div>
        </div>
    );
};

export default CalendarCard;
