import React from 'react';
import CanteenCard from './CanteenCard';
import './CanteenGrid.css';

const CanteenGrid = ({ selectedDay }) => {
  // Check if selected day is Saturday or Sunday
  const isWeekend = selectedDay.name === 'Sobota' || selectedDay.name === 'Nedeľa';
  
  const canteens = [
    {
      id: 1,
      name: 'Jedáleň Němcovej 1',
      hours: '11:00 - 14:00',
      status: isWeekend ? 'Zatvorené' : 'Otvorené',
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/1.jpg',
      meals: 'Dnes 3 hlavné jedlá na výber'
    },
    {
      id: 2,
      name: 'Jedáleň Němcovej 1',
      hours: '11:00 - 14:00',
      status: isWeekend ? 'Zatvorené' : 'Otvorené',
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/2.jpeg',
      meals: 'Dnes 4 hlavné jedlá na výber'
    },
    {
      id: 3,
      name: 'Jedáleň Němcovej 1',
      hours: '11:00 - 14:00',
      status: isWeekend ? 'Zatvorené' : 'Otvorené',
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/3.jpeg',
      meals: 'Dnes 3 hlavné jedlá na výber'
    },
    {
      id: 4,
      name: 'Jedáleň Němcovej 1',
      hours: '11:00 - 14:00',
      status: isWeekend ? 'Zatvorené' : 'Otvorené',
      statusColor: isWeekend ? 'red' : 'green',
      image: '/img/banners/4.jpeg',
      meals: 'Dnes 3 hlavné jedlá na výber'
    },
    {
      id: 5,
      name: 'Jedáleň Němcovej 1',
      hours: '11:00 - 14:00',
      status: 'Zatvorené',
      statusColor: 'orange',
      image: '/img/banners/5.jpeg',
      meals: 'Dnes 3 hlavné jedlá na výber'
    },
    {
      id: 6,
      name: 'Jedáleň Němcovej 1',
      hours: '11:00 - 14:00',
      status: 'Zatvorené',
      statusColor: 'red',
      image: '/img/banners/6.jpeg',
      meals: 'Dnes 3 hlavné jedlá na výber'
    },
    {
      id: 7,
      name: 'Jedáleň Němcovej 1',
      hours: '11:00 - 14:00',
      status: 'Zatvorené',
      statusColor: 'orange',
      image: '/img/banners/7.jpeg',
      meals: 'Dnes 3 hlavné jedlá na výber'
    }
  ];

  return (
    <div className="canteen-section">
      <div className="section-header">
        <h2 className="section-title">Jedálny lístok</h2>
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
