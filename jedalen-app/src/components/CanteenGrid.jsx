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
      name: t.canteen.names[0],
      hours: '11:00 - 14:00',
      status: isWeekend ? t.canteen.status.closed : t.canteen.status.open,
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/1.jpg',
      meals: t.canteen.mealsAvailable.replace('${count}', '3')
    },
    {
      id: 2,
      name: t.canteen.names[1],
      hours: '11:00 - 14:00',
      status: isWeekend ? t.canteen.status.closed : t.canteen.status.open,
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/2.jpeg',
      meals: t.canteen.mealsAvailable.replace('${count}', '4')
    },
    {
      id: 3,
      name: t.canteen.names[2],
      hours: '11:00 - 14:00',
      status: isWeekend ? t.canteen.status.closed : t.canteen.status.open,
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/3.jpeg',
      meals: t.canteen.mealsAvailable.replace('${count}', '3')
    },
    {
      id: 4,
      name: t.canteen.names[3],
      hours: '11:00 - 14:00',
      status: isWeekend ? t.canteen.status.closed : t.canteen.status.open,
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/4.jpeg',
      meals: t.canteen.mealsAvailable.replace('${count}', '3')
    },
    {
      id: 5,
      name: t.canteen.names[4],
      hours: '11:00 - 14:00',
      status: t.canteen.status.closed,
      statusColor: 'green',
      image: '/img/banners/5.jpeg',
      meals: t.canteen.mealsAvailable.replace('${count}', '3')
    },
    {
      id: 6,
      name: t.canteen.names[5],
      hours: '11:00 - 14:00',
      status: t.canteen.status.closed,
      statusColor: 'red',
      image: '/img/banners/6.jpeg',
      meals: t.canteen.mealsAvailable.replace('${count}', '3')
    },
    {
      id: 7,
      name: t.canteen.names[6],
      hours: '11:00 - 14:00',
      status: t.canteen.status.closed,
      statusColor: 'red',
      image: '/img/banners/7.jpeg',
      meals: t.canteen.mealsAvailable.replace('${count}', '3')
    }
  ];

  return (
    <div className="canteen-section">
      <div className="section-header">
        <h2 className="section-title">{t.menu.title}</h2>
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
