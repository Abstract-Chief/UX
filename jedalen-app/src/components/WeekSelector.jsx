import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import './WeekSelector.css';

const WeekSelector = ({ selectedDay, onDayChange }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const days = [
    { name: t.days.tuesday, date: '25.11.2025', key: 'tuesday' },
    { name: t.days.wednesday, date: '26.11.2025', key: 'wednesday' },
    { name: t.days.thursday, date: '27.11.2025', key: 'thursday' },
    { name: t.days.friday, date: '28.11.2025', key: 'friday' },
    { name: t.days.monday, date: '1.12.2025', key: 'monday' },
    { name: t.days.tuesday, date: '2.12.2025', key: 'tuesday' },
    { name: t.days.wednesday, date: '3.12.2025', key: 'wednesday' }
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
