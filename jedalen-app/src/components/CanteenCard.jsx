import React from 'react';
import './CanteenCard.css';

const CanteenCard = ({ name, hours, status, statusColor, image, meals }) => {
  return (
    <div className="canteen-card">
      <div className="card-image">
        <img src={image} alt={name} />
        <div className="card-content">
          <div className="card-header">
            <h3 className="canteen-name">{name}</h3>
            <span className={`status-badge ${statusColor}`}>{status}</span>
          </div>
          <p className="opening-hours">Otvorné dnes: {hours}</p>
          <p className="meals-info">{meals}</p>
        </div>
      </div>
    </div>
  );
};

export default CanteenCard;
