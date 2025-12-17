import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
          <Link to="/alergeny" className="nav-link">Alergény</Link>
          <Link to="/kontakt" className="nav-link">Kontakt</Link>
          <div className="language-selector">
            <span>SK ▼</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
