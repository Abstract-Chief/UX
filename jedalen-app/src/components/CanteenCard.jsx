import React from 'react';
import { Link } from 'react-router-dom';
import './CanteenCard.css';

const CanteenCard = ({ id, name, hours, status, statusColor, image, meals }) => {
  return (
    <Link to={`/menu/${id}`} className="canteen-card-link">
      <div className="canteen-card">
        <div className="card-image">
          <img src={image} alt={name} />
          <div className="card-content">
            <div className="card-header">
              <h3 className="canteen-name">{name}</h3>
              <span className={`status-badge ${statusColor}`}>{status}</span>
            </div>
            <hr/>
            <p className="meals-info">{meals}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CanteenCard;
