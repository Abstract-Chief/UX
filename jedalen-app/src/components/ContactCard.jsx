import React from 'react';
import './ContactCard.css';

const ContactCard = ({ image, title, name, phone, mobile, email }) => {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <img src={image} alt={name} className="contact-avatar" />
        <div className="contact-info">
          <div className="contact-title">{title}</div>
          <div className="contact-name">{name}</div>
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-row">
          <span className="contact-label">Telefón:</span>
          <span className="contact-value">{phone}</span>
        </div>
        {mobile && (
          <div className="contact-row">
            <span className="contact-label">Mobil:</span>
            <span className="contact-value">{mobile}</span>
          </div>
        )}
        <div className="contact-row">
          <span className="contact-label">E-mail:</span>
          <span className="contact-value">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
