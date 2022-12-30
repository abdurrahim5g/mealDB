// import React, { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MealCard from "../MealCard/MealCard";
import "./MealContainer.css";

const MealContainer = ({ meals }) => {
  const [singleMeal, setSingleMeal] = useState({});

  const mealModal = document.getElementById("mealModal");
  const mealDetails = (singleMeal) => {
    try {
      setSingleMeal(singleMeal);
    } catch (error) {
      console.log(error);
    } finally {
      if (singleMeal.idMeal !== undefined) {
        mealModal.style.display = "block";
        document.body.style.overflow = "hidden";
      }
      console.log(singleMeal);
    }
  };
  const hideModal = () => {
    mealModal.style.display = "none";
    document.body.style.overflow = "auto";
  };
  return (
    <section className="main-container">
      <div className="container">
        <h3>Total Meal: ({meals?.length ? meals.length : 0})</h3>
        <div className="meal-grid">
          {meals?.length !== 0 &&
            meals?.map((meal) => (
              <MealCard
                meal={meal}
                key={meal.idMeal}
                mealDetails={mealDetails}
              ></MealCard>
            ))}
        </div>

        <div id="mealModal" style={{ display: "none" }}>
          <div id="backdrop" className="modal-backdrop">
            <div id="modalContainer" className="modal-container">
              <span className="x-mark" onClick={hideModal}>
                <FontAwesomeIcon icon={faXmark} />
              </span>
              <img src={singleMeal.strMealThumb} alt="" />
              <h3>{singleMeal.strMeal}</h3>
              <div className="modal-meal-body">
                <p>{singleMeal.strInstructions}</p>
              </div>
              <button onClick={hideModal}>Close</button>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "20px", textAlign: "center" }}>
          {meals?.length === undefined && "No meal found"}
        </p>
      </div>
    </section>
  );
};

export default MealContainer;
