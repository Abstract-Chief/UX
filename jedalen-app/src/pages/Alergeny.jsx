import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import Header from '../components/Header';
import './Alergeny.css';

const Alergeny = () => {
  const { language } = useLanguage();
  const t = translations[language].allergens;

  const allergens = [
    { id: 1, icon: '🌾', name: t.list[1] },
    { id: 2, icon: '🦐', name: t.list[2] },
    { id: 3, icon: '🥚', name: t.list[3] },
    { id: 4, icon: '🐟', name: t.list[4] },
    { id: 5, icon: '🥜', name: t.list[5] },
    { id: 6, icon: '🫘', name: t.list[6] },
    { id: 7, icon: '🥛', name: t.list[7] },
    { id: 8, icon: '🌰', name: t.list[8] },
    { id: 9, icon: '🥬', name: t.list[9] },
    { id: 10, icon: '🌭', name: t.list[10] },
    { id: 11, icon: '🌱', name: t.list[11] },
    { id: 12, icon: '🧪', name: t.list[12] },
    { id: 13, icon: '🫛', name: t.list[13] },
    { id: 14, icon: '🦪', name: t.list[14] }
  ];

  return (
    <div className="alergeny-page">
      <Header />
      
      <div className="alergeny-container">
        <div className="alergeny-intro">
          <p>{t.intro1}</p>
          <p>{t.intro2}</p>
        </div>

        <div className="allergens-grid">
          {allergens.map((allergen) => (
            <div key={allergen.id} className="allergen-card">
              <div className="allergen-number">{allergen.id}</div>
              <span className="allergen-icon">{allergen.icon}</span>
              <span className="allergen-name">{allergen.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alergeny;
