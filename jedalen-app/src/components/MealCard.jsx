import React from 'react';
import './MealCard.css';

const MealCard = ({ meal, veganLabel }) => {
  return (
    <div className="meal-card">
      <div className="meal-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-info">
        <h3 className="meal-name">{meal.name}</h3>
        <div className="meal-footer">
          <div className="meal-footer-left">
            <span className="meal-portion">{meal.portion || ''}</span>
            <div className="meal-icons">
              {meal.vegan && (
                <img src="/img/icons/vegan.svg" alt="Vegan" className="meal-icon" title="Vegan" />
              )}
              {meal.glutenFree && (
                <img src="/img/icons/gluten.svg" alt="Gluten Free" className="meal-icon" title="Gluten Free" />
              )}
            </div>
          </div>
          <span className="meal-price">{meal.price}</span>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
