import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import './Header.css';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <img src="/img/logo.png" alt="TUKE Logo" />
          </div>
          <span className="logo-text">Jedalen.tuke</span>
        </Link>
        
        <nav className="nav">
          <Link to="/alergeny" className="nav-link">{t.nav.allergens}</Link>
          <Link to="/kontakt" className="nav-link">{t.nav.contact}</Link>
          <div className="language-selector" onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
            <span>{language.toUpperCase()} ▼</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
