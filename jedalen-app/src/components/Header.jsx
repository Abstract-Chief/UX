import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <div className="logo-icon">
            <img src="/img/logo.png" alt="TUKE Logo" />
          </div>
          <span className="logo-text">Jedalen.tuke</span>
        </a>
        
        <nav className="nav">
          <a href="/alergeny" className="nav-link">Alergény</a>
          <a href="/kontakt" className="nav-link">Kontakt</a>
          <div className="language-selector">
            <span>SK ▼</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
