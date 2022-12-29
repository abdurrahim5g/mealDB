// import React, { useEffect, useState } from "react";
import MealCard from "../MealCard/MealCard";
import "./MealContainer.css";

const MealContainer = ({ meals }) => {
  return (
    <section className="main-container">
      <div className="container">
        <h3>Total Meal: ({meals?.length ? meals.length : 0})</h3>
        <div className="meal-grid">
          {meals?.length !== 0 &&
            meals?.map((meal) => (
              <MealCard meal={meal} key={meal.idMeal}></MealCard>
            ))}
        </div>
        <p style={{ fontSize: "20px", textAlign: "center" }}>
          {meals?.length === undefined && "No meal found"}
        </p>
      </div>
    </section>
  );
};

export default MealContainer;
