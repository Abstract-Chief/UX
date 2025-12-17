import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';
import MealCard from '../components/MealCard';
import './Menu.css';

// Sample meal data generator
const generateMeals = (category, count) => {
  const mainDishes = [
    { name: 'Kuracie prsia na grile s ryžou', price: '3,80€', portion: null, vegan: false, glutenFree: false, image: '/img/food/1.jpeg' },
    { name: 'Hovädzí guláš s knedľou', price: '4,20€', portion: null, vegan: false, glutenFree: false, image: '/img/food/2.jpeg' },
    { name: 'Vyprážaný syr s hranolkami', price: '3,50€', portion: null, vegan: false, glutenFree: false, image: '/img/food/3.jpeg' },
    { name: 'Pečená kačica s lokšami', price: '4,50€', portion: null, vegan: false, glutenFree: false, image: '/img/food/4.jpeg' },
    { name: 'Tofu s quinoou a zeleninou', price: '3,80€', portion: null, vegan: true, glutenFree: true, image: '/img/food/5.jpeg' },
    { name: 'Bravčová rezen s varenými zemiakmi', price: '4,00€', portion: null, vegan: false, glutenFree: false, image: '/img/food/6.jpeg' },
    { name: 'Kurací perkelt s haluškami', price: '3,90€', portion: null, vegan: false, glutenFree: false, image: '/img/food/7.jpeg' },
    { name: 'Lasagne bolognese', price: '4,10€', portion: null, vegan: false, glutenFree: false, image: '/img/food/8.jpeg' },
    { name: 'Pečený losos s brokolicou', price: '5,20€', portion: null, vegan: false, glutenFree: true, image: '/img/food/9.jpeg' },
    { name: 'Špenátové gnocchi s paradajkovou omáčkou', price: '3,70€', portion: null, vegan: true, glutenFree: false, image: '/img/food/10.jpeg' },
    { name: 'Hovädzí steak s pečenými zemiakmi', price: '5,50€', portion: null, vegan: false, glutenFree: true, image: '/img/food/11.jpeg' },
    { name: 'Kurací šalát s caesarovou omáčkou', price: '4,30€', portion: null, vegan: false, glutenFree: false, image: '/img/food/1.jpeg' },
    { name: 'Zeleninové kari s basmati ryžou', price: '3,60€', portion: null, vegan: true, glutenFree: true, image: '/img/food/2.jpeg' },
    { name: 'Penne carbonara', price: '3,80€', portion: null, vegan: false, glutenFree: false, image: '/img/food/3.jpeg' },
    { name: 'Morčacie prsia v hubovej omáčke', price: '4,40€', portion: null, vegan: false, glutenFree: false, image: '/img/food/4.jpeg' }
  ];
  
  const soups = [
    { name: 'Fazuľová s fliačkami', price: '3,80€', portion: '350ml', vegan: false, glutenFree: false, image: '/img/food/5.jpeg' },
    { name: 'Zeleninová polievka', price: '3,80€', portion: '350ml', vegan: true, glutenFree: true, image: '/img/food/6.jpeg' },
    { name: 'Gulášová polievka', price: '3,80€', portion: '350ml', vegan: false, glutenFree: false, image: '/img/food/7.jpeg' },
    { name: 'Zemiaková polievka', price: '3,80€', portion: '350ml', vegan: false, glutenFree: false, image: '/img/food/8.jpeg' },
    { name: 'Kurací vývar s rezancami', price: '3,80€', portion: '350ml', vegan: false, glutenFree: false, image: '/img/food/9.jpeg' },
    { name: 'Šošovicová polievka', price: '2,50€', portion: '350ml', vegan: true, glutenFree: true, image: '/img/food/10.jpeg' },
    { name: 'Kapustnica', price: '3,20€', portion: '350ml', vegan: false, glutenFree: false, image: '/img/food/11.jpeg' },
    { name: 'Paradajková polievka', price: '2,80€', portion: '350ml', vegan: true, glutenFree: true, image: '/img/food/1.jpeg' },
    { name: 'Hrachová polievka s klobásou', price: '3,00€', portion: '350ml', vegan: false, glutenFree: true, image: '/img/food/2.jpeg' },
    { name: 'Kulajda', price: '3,40€', portion: '350ml', vegan: false, glutenFree: false, image: '/img/food/3.jpeg' },
    { name: 'Cesnaková polievka', price: '2,90€', portion: '350ml', vegan: false, glutenFree: false, image: '/img/food/4.jpeg' },
    { name: 'Minestrone', price: '3,10€', portion: '350ml', vegan: true, glutenFree: true, image: '/img/food/5.jpeg' },
    { name: 'Hubová polievka', price: '3,30€', portion: '350ml', vegan: false, glutenFree: false, image: '/img/food/6.jpeg' },
    { name: 'Brokolicová krémová polievka', price: '2,70€', portion: '350ml', vegan: true, glutenFree: true, image: '/img/food/7.jpeg' }
  ];
  
  const salads = [
    { name: 'Zeleninový šalát', price: '2,50€', portion: null, vegan: true, glutenFree: true, image: '/img/food/8.jpeg' },
    { name: 'Ťapaný šalát', price: '2,80€', portion: null, vegan: false, glutenFree: false, image: '/img/food/9.jpeg' },
    { name: 'Cézar šalát', price: '3,20€', portion: null, vegan: false, glutenFree: false, image: '/img/food/10.jpeg' },
    { name: 'Grécky šalát', price: '3,00€', portion: null, vegan: false, glutenFree: true, image: '/img/food/11.jpeg' },
    { name: 'Šalát s tuniakom', price: '3,50€', portion: null, vegan: false, glutenFree: true, image: '/img/food/1.jpeg' },
    { name: 'Šalát Caprese', price: '2,90€', portion: null, vegan: false, glutenFree: true, image: '/img/food/2.jpeg' },
    { name: 'Quinoa šalát s avokádom', price: '3,80€', portion: null, vegan: true, glutenFree: true, image: '/img/food/3.jpeg' },
    { name: 'Ovocný šalát', price: '2,40€', portion: null, vegan: true, glutenFree: true, image: '/img/food/4.jpeg' },
    { name: 'Šalát s pečenou cviklou', price: '3,10€', portion: null, vegan: true, glutenFree: true, image: '/img/food/5.jpeg' },
    { name: 'Coleslaw', price: '2,20€', portion: null, vegan: true, glutenFree: true, image: '/img/food/6.jpeg' },
    { name: 'Kurací šalát s jogurtovou zálievkou', price: '3,60€', portion: null, vegan: false, glutenFree: false, image: '/img/food/7.jpeg' },
    { name: 'Šalát s kozím syrom a orechmi', price: '3,70€', portion: null, vegan: false, glutenFree: true, image: '/img/food/8.jpeg' }
  ];
  
  const data = category === 'mainDishes' ? mainDishes : category === 'soups' ? soups : salads;
  const randomCount = Math.min(count, data.length);
  
  return data.slice(0, randomCount).map((meal, index) => ({
    ...meal,
    id: index
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
    mainDishes: Math.floor(Math.random() * 3) + 6, // 3-5 items
    soups: Math.floor(Math.random() * 2) + 6, // 3-4 items
    salads: Math.floor(Math.random() * 2) + 5 // 2-3 items
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
            <div className="menu-logo-icon">
              <img src="/img/logo.png" alt="TUKE Logo" />
            </div>
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
