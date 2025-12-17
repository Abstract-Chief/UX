import React from 'react';
import Header from '../components/Header';
import './Alergeny.css';

const Alergeny = () => {
  const allergens = [
    { id: 1, icon: '🌾', name: 'Obilniny obsahujúce lepok' },
    { id: 2, icon: '🦐', name: 'Kôrovce a výrobky z nich' },
    { id: 3, icon: '🥚', name: 'Vajcia a výrobky z nich' },
    { id: 4, icon: '🐟', name: 'Ryby a výrobky z nich' },
    { id: 5, icon: '🥜', name: 'Arašidy a výrobky z nich' },
    { id: 6, icon: '🫘', name: 'Sójové zrná a výrobky z nich' },
    { id: 7, icon: '🥛', name: 'Mlieko a výrobky z neho' },
    { id: 8, icon: '🌰', name: 'Orechy a výrobky z nich' },
    { id: 9, icon: '🥬', name: 'Zeler a výrobky z neho' },
    { id: 10, icon: '🌭', name: 'Horčica a výrobky z nej' },
    { id: 11, icon: '🌱', name: 'Sezamové semená a výrobky z nich' },
    { id: 12, icon: '🧪', name: 'Oxid siričitý a siričitany' },
    { id: 13, icon: '🫛', name: 'Vlčí bôb a výrobky z neho' },
    { id: 14, icon: '🦪', name: 'Mäkkýše a výrobky z nich' }
  ];

  return (
    <div className="alergeny-page">
      <Header />
      
      <div className="alergeny-container">
        <div className="alergeny-intro">
          <p>
            Z nových legislatívnych predpisov a výnosu MP SR a MZ SR č. 1187/2004 vyplýva zariadeniam 
            spoločného stravovania povinnosť označovať prítomnosť alergénov uvádzaných do obehu pre 
            konečného spotrebiteľa.
          </p>
          <p>
            V zmysle hore uvedených pokynov sú pri jedlách v ponuke označené číslom alergény 
            nachádzajúce sa v jedle, podľa nasledovného zoznamu:
          </p>
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
