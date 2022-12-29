import React from "react";
import "./MealCard.css";

const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="body">
        <h4>{meal.strMeal}</h4>
      </div>
    </div>
  );
};

export default MealCard;
