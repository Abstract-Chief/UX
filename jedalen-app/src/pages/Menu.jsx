import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import './Menu.css';

// Sample meal data generator
const generateMeals = (category, count) => {
  const mainDishes = [
    { name: 'Kuracie prsia na grile s ryžou', price: '3,80€', portion: null, vegan: false, glutenFree: false },
    { name: 'Hovädzí guláš s knedľou', price: '4,20€', portion: null, vegan: false, glutenFree: false },
    { name: 'Vyprážaný syr s hranolkami', price: '3,50€', portion: null, vegan: false, glutenFree: false },
    { name: 'Pečená kačica s lokšami', price: '4,50€', portion: null, vegan: false, glutenFree: false },
    { name: 'Tofu s quinoou a zeleninou', price: '3,80€', portion: null, vegan: true, glutenFree: true }
  ];
  
  const soups = [
    { name: 'Fazuľová s fliačkami', price: '3,80€', portion: '350ml', vegan: false, glutenFree: false },
    { name: 'Zeleninová polievka', price: '3,80€', portion: '350ml', vegan: true, glutenFree: true },
    { name: 'Gulášová polievka', price: '3,80€', portion: '350ml', vegan: false, glutenFree: false },
    { name: 'Zemiaková polievka', price: '3,80€', portion: '350ml', vegan: false, glutenFree: false },
    { name: 'Kurací vývar s rezancami', price: '3,80€', portion: '350ml', vegan: false, glutenFree: false }
  ];
  
  const salads = [
    { name: 'Zeleninový šalát', price: '2,50€', portion: null, vegan: true, glutenFree: true },
    { name: 'Ťapaný šalát', price: '2,80€', portion: null, vegan: false, glutenFree: false },
    { name: 'Cézar šalát', price: '3,20€', portion: null, vegan: false, glutenFree: false },
    { name: 'Grécky šalát', price: '3,00€', portion: null, vegan: false, glutenFree: true }
  ];
  
  const data = category === 'mainDishes' ? mainDishes : category === 'soups' ? soups : salads;
  const randomCount = Math.min(count, data.length);
  
  return data.slice(0, randomCount).map((meal, index) => ({
    ...meal,
    id: index,
    image: '/img/food/base.jpeg'
  }));
};

const Menu = () => {
  const { canteenId } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  
  const [selectedCategory, setSelectedCategory] = useState('mainDishes');
  const [selectedDay, setSelectedDay] = useState('monday');
  const [showVegan, setShowVegan] = useState(false);
  const [showGlutenFree, setShowGlutenFree] = useState(false);
  
  // Generate random number of meals for each category
  const mealCounts = {
    mainDishes: Math.floor(Math.random() * 3) + 3, // 3-5 items
    soups: Math.floor(Math.random() * 2) + 3, // 3-4 items
    salads: Math.floor(Math.random() * 2) + 2 // 2-3 items
  };
  
  const allMeals = {
    mainDishes: generateMeals('mainDishes', mealCounts.mainDishes),
    soups: generateMeals('soups', mealCounts.soups),
    salads: generateMeals('salads', mealCounts.salads)
  };
  
  const currentMeals = allMeals[selectedCategory];
  
  // Filter meals based on dietary preferences
  const filteredMeals = currentMeals.filter(meal => {
    if (showVegan && !meal.vegan) return false;
    if (showGlutenFree && !meal.glutenFree) return false;
    return true;
  });
  
  const days = [
    { key: 'monday', label: t.days.monday },
    { key: 'tuesday', label: t.days.tuesday },
    { key: 'wednesday', label: t.days.wednesday },
    { key: 'thursday', label: t.days.thursday },
    { key: 'friday', label: t.days.friday },
    { key: 'saturday', label: t.days.saturday },
    { key: 'sunday', label: t.days.sunday }
  ];
  
  const currentDayLabel = days.find(d => d.key === selectedDay)?.label || t.days.monday;
  const currentDate = '25.11.2025'; // Static date for demo

  return (
    <div className="menu-page">
      <header className="menu-header">
        <div className="menu-header-container">
          <Link to="/" className="menu-logo">
            <div className="menu-logo-icon">🍽️</div>
            <span className="menu-logo-text">Jedáleň Němcovej 1</span>
          </Link>
          
          <nav className="menu-nav">
            <Link to="/alergeny" className="menu-nav-link">{t.nav.allergens}</Link>
            <Link to="/kontakt" className="menu-nav-link">{t.nav.contact}</Link>
            <div className="menu-language-selector">
              <span>{language.toUpperCase()} ▼</span>
            </div>
          </nav>
        </div>
      </header>
      
      <div className="menu-hero">
        <div className="menu-hero-content">
          <div className="menu-title-section">
            <h1 className="menu-title">{t.menu.title}</h1>
            <div className="menu-date">
              {currentDayLabel}, {currentDate}
            </div>
          </div>
          
          <div className="menu-day-selector">
            <span className="menu-day-label">{t.menu.selectDay}</span>
            <div className="menu-dropdown">
              <select 
                value={selectedDay} 
                onChange={(e) => setSelectedDay(e.target.value)}
                className="menu-dropdown-select"
              >
                {days.map(day => (
                  <option key={day.key} value={day.key}>{day.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="menu-controls">
          <div className="menu-categories">
            <button 
              className={`category-tab ${selectedCategory === 'mainDishes' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('mainDishes')}
            >
              {t.menu.categories.mainDishes}
            </button>
            <button 
              className={`category-tab ${selectedCategory === 'soups' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('soups')}
            >
              {t.menu.categories.soups}
            </button>
            <button 
              className={`category-tab ${selectedCategory === 'salads' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('salads')}
            >
              {t.menu.categories.salads}
            </button>
            <button className="category-tab-arrow">→</button>
          </div>
          
          <div className="menu-day-selector-mobile">
            <div className="menu-dropdown">
              <select 
                value={selectedDay} 
                onChange={(e) => setSelectedDay(e.target.value)}
                className="menu-dropdown-select"
              >
                {days.map(day => (
                  <option key={day.key} value={day.key}>{day.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="menu-filters">
            <button 
              className={`filter-btn ${showVegan ? 'active' : ''}`}
              onClick={() => setShowVegan(!showVegan)}
            >
              🌱 {t.menu.filters.vegan}
            </button>
            <button 
              className={`filter-btn ${showGlutenFree ? 'active' : ''}`}
              onClick={() => setShowGlutenFree(!showGlutenFree)}
            >
              🌾 {t.menu.filters.glutenFree}
            </button>
          </div>
        </div>
      </div>
      
      <main className="menu-content">
        <div className="meals-grid">
          {filteredMeals.map(meal => (
            <div key={meal.id} className="meal-card">
              <div className="meal-image">
                <img src={meal.image} alt={meal.name} />
              </div>
              <div className="meal-info">
                <h3 className="meal-name">{meal.name}</h3>
                {meal.vegan && <span className="meal-badge vegan">🌱 {t.menu.filters.vegan}</span>}
                <div className="meal-footer">
                  {meal.portion && <span className="meal-portion">{meal.portion}</span>}
                  <span className="meal-price">{meal.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
