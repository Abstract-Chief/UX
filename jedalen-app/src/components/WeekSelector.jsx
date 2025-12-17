import React from 'react';
import './WeekSelector.css';

const WeekSelector = ({ selectedDay, onDayChange }) => {
  const days = [
    { name: 'Utorok', date: '25.11.2025' },
    { name: 'Streda', date: '26.11.2025' },
    { name: 'Štvrtok', date: '27.11.2025' },
    { name: 'Piatok', date: '28.11.2025' },
    { name: 'Pondelok', date: '1.12.2025' },
    { name: 'Utorok', date: '2.12.2025' },
    { name: 'Streda', date: '3.12.2025' }
  ];

  return (
    <div className="week-selector">
      {days.map((day, index) => (
        <button
          key={index}
          className={`day-button ${selectedDay.date === day.date ? 'active' : ''}`}
          onClick={() => onDayChange(day)}
        >
          <div className="day-name">{day.name}</div>
          <div className="day-date">{day.date}</div>
        </button>
      ))}
    </div>
  );
};

export default WeekSelector;
