import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import './ContactCard.css';

const ContactCard = ({ image, title, name, phone, mobile, email }) => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  
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
          <span className="contact-label">{t.phone}:</span>
          <span className="contact-value">{phone}</span>
        </div>
        {mobile && (
          <div className="contact-row">
            <span className="contact-label">{t.mobile}:</span>
            <span className="contact-value">{mobile}</span>
          </div>
        )}
        <div className="contact-row">
          <span className="contact-label">{t.email}:</span>
          <span className="contact-value">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
