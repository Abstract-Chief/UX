import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import Header from '../components/Header';
import WeekSelector from '../components/WeekSelector';
import CanteenGrid from '../components/CanteenGrid';
import './Home.css';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [selectedDay, setSelectedDay] = useState({
    name: t.days.tuesday,
    date: '25.11.2025',
    key: 'tuesday'
  });

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <WeekSelector selectedDay={selectedDay} onDayChange={setSelectedDay} />
        <CanteenGrid selectedDay={selectedDay} />
      </main>
    </div>
  );
};

export default Home;
