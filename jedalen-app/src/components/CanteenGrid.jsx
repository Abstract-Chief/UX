import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import CanteenCard from './CanteenCard';
import './CanteenGrid.css';

const CanteenGrid = ({ selectedDay }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Check if selected day is Saturday or Sunday
  const isWeekend = selectedDay.key === 'saturday' || selectedDay.key === 'sunday';
  
  const canteens = [
    {
      id: 1,
      name: language === 'sk' ? 'Jedáleň Němcovej 1' : 'Canteen Němcovej 1',
      hours: '11:00 - 14:00',
      status: isWeekend ? t.canteen.status.closed : t.canteen.status.open,
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/1.jpg',
      meals: language === 'sk' ? 'Dnes 3 hlavné jedlá na výber' : 'Today 3 main meals available'
    },
    {
      id: 2,
      name: language === 'sk' ? 'Jedáleň Němcovej 1' : 'Canteen Němcovej 1',
      hours: '11:00 - 14:00',
      status: isWeekend ? t.canteen.status.closed : t.canteen.status.open,
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/2.jpeg',
      meals: language === 'sk' ? 'Dnes 4 hlavné jedlá na výber' : 'Today 4 main meals available'
    },
    {
      id: 3,
      name: language === 'sk' ? 'Jedáleň Němcovej 1' : 'Canteen Němcovej 1',
      hours: '11:00 - 14:00',
      status: isWeekend ? t.canteen.status.closed : t.canteen.status.open,
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/3.jpeg',
      meals: language === 'sk' ? 'Dnes 3 hlavné jedlá na výber' : 'Today 3 main meals available'
    },
    {
      id: 4,
      name: language === 'sk' ? 'Jedáleň Němcovej 1' : 'Canteen Němcovej 1',
      hours: '11:00 - 14:00',
      status: isWeekend ? t.canteen.status.closed : t.canteen.status.open,
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/4.jpeg',
      meals: language === 'sk' ? 'Dnes 3 hlavné jedlá na výber' : 'Today 3 main meals available'
    },
    {
      id: 5,
      name: language === 'sk' ? 'Jedáleň Němcovej 1' : 'Canteen Němcovej 1',
      hours: '11:00 - 14:00',
      status: t.canteen.status.closed,
      statusColor: 'green',
      image: '/img/banners/5.jpeg',
      meals: language === 'sk' ? 'Dnes 3 hlavné jedlá na výber' : 'Today 3 main meals available'
    },
    {
      id: 6,
      name: language === 'sk' ? 'Jedáleň Němcovej 1' : 'Canteen Němcovej 1',
      hours: '11:00 - 14:00',
      status: t.canteen.status.closed,
      statusColor: 'red',
      image: '/img/banners/6.jpeg',
      meals: language === 'sk' ? 'Dnes 3 hlavné jedlá на výber' : 'Today 3 main meals available'
    },
    {
      id: 7,
      name: language === 'sk' ? 'Jedáleň Němcovej 1' : 'Canteen Němcovej 1',
      hours: '11:00 - 14:00',
      status: t.canteen.status.closed,
      statusColor: 'red',
      image: '/img/banners/7.jpeg',
      meals: language === 'sk' ? 'Dnes 3 hlavné jedlá na výber' : 'Today 3 main meals available'
    }
  ];

  return (
    <div className="canteen-section">
      <div className="section-header">
        <h2 className="section-title">{language === 'sk' ? 'Jedálny lístok' : 'Menu'}</h2>
        <span className="section-divider">-</span>
        <p className="section-subtitle">{selectedDay.name} ({selectedDay.date})</p>
      </div>
      <div className="canteen-grid">
        {canteens.map(canteen => (
          <CanteenCard key={canteen.id} {...canteen} />
        ))}
      </div>
    </div>
  );
};

export default CanteenGrid;
