import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import MealCard from '../components/MealCard';
import './Menu.css';

// Sample meal data generator
const generateMeals = (category, count, mealNames) => {
  const data = mealNames.map((name, index) => {
    let price, portion, vegan, glutenFree;
    
    if (category === 'mainDishes') {
      price = (Math.random() * 2 + 3.5).toFixed(2) + '€';
      portion = null;
      vegan = index === 4 || index === 9 || index === 12; // Some are vegan
      glutenFree = index === 4 || index === 8 || index === 10 || index === 12; // Some are gluten-free
    } else if (category === 'soups') {
      price = (Math.random() * 1 + 2.5).toFixed(2) + '€';
      portion = '350ml';
      vegan = index === 1 || index === 5 || index === 7 || index === 11 || index === 13; // Some are vegan
      glutenFree = index === 1 || index === 5 || index === 7 || index === 8 || index === 11 || index === 13; // Some are gluten-free
    } else { // salads
      price = (Math.random() * 1.5 + 2.2).toFixed(2) + '€';
      portion = null;
      vegan = index === 0 || index === 6 || index === 7 || index === 8 || index === 9; // Some are vegan
      glutenFree = index === 0 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9 || index === 11; // Some are gluten-free
    }
    
    return {
      id: index,
      name: name,
      price: price,
      portion: portion,
      vegan: vegan,
      glutenFree: glutenFree,
      image: `/img/food/${(index % 11) + 1}.jpeg`
    };
  });
  
  const randomCount = Math.min(count, data.length);
  return data.slice(0, randomCount);
};

const Menu = () => {
  const { canteenId } = useParams();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  
  const [selectedCategory, setSelectedCategory] = useState('mainDishes');
  const [selectedDay, setSelectedDay] = useState('monday');
  const [showVegan, setShowVegan] = useState(false);
  const [showGlutenFree, setShowGlutenFree] = useState(false);
  
  // Generate random number of meals for each category
  const mealCounts = {
    mainDishes: Math.floor(Math.random() * 3) + 6, // 3-5 items
    soups: Math.floor(Math.random() * 2) + 6, // 3-4 items
    salads: Math.floor(Math.random() * 2) + 5 // 2-3 items
  };
  
  const allMeals = {
    mainDishes: generateMeals('mainDishes', mealCounts.mainDishes, t.menu.meals.mainDishes),
    soups: generateMeals('soups', mealCounts.soups, t.menu.meals.soups),
    salads: generateMeals('salads', mealCounts.salads, t.menu.meals.salads)
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
            <div className="menu-logo-icon">
              <img src="/img/logo.png" alt="TUKE Logo" />
            </div>
            <span className="menu-logo-text">Jedáleň Němcovej 1</span>
          </Link>
          
          <nav className="menu-nav">
            <Link to="/alergeny" className="menu-nav-link">{t.nav.allergens}</Link>
            <Link to="/kontakt" className="menu-nav-link">{t.nav.contact}</Link>
            <div className="menu-language-selector" onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
              <span>{language.toUpperCase()} ▼</span>
            </div>
          </nav>
        </div>
      </header>
      <div className="menu-hero">
        <hr/>
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
          </div>
          
          <div className="menu-filters">
            <button 
              className={`filter-btn ${showVegan ? 'active' : ''}`}
              onClick={() => setShowVegan(!showVegan)}
            >
              <img src="/img/icons/vegan.svg" alt="Vegan" className="filter-icon" />
              {t.menu.filters.vegan}
            </button>
            <button 
              className={`filter-btn ${showGlutenFree ? 'active' : ''}`}
              onClick={() => setShowGlutenFree(!showGlutenFree)}
            >
              <img src="/img/icons/gluten.svg" alt="Gluten Free" className="filter-icon" />
              {t.menu.filters.glutenFree}
            </button>
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
        </div>
      </div>
      
      <main className="menu-content">
        <div className="meals-grid">
          {filteredMeals.map(meal => (
            <MealCard 
              key={meal.id} 
              meal={meal}
              veganLabel={t.menu.filters.vegan}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
