import React, { useEffect, useState } from "react";
import MealCard from "../MealCard/MealCard";
import "./MealContainer.css";

const MealContainer = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <section className="main-container">
      <div className="container">
        <div className="meal-grid">
          {meals.map((meal) => (
            <MealCard meal={meal} key={meal.idMeal}></MealCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealContainer;
