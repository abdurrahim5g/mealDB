import React from "react";
import "./MealCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const MealCard = ({ meal, mealDetails }) => {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="body">
        <h4>
          {meal.strMeal}
          <span onClick={() => mealDetails(meal)}>
            <FontAwesomeIcon icon={faEye} />
          </span>
        </h4>
      </div>
    </div>
  );
};

export default MealCard;
