import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MealContainer from "./components/MealContainer/MealContainer";

function App() {
  const [meals, setMeals] = useState([]);

  const loadMeals = (search = "") => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  };

  useEffect(() => {
    loadMeals();
  }, []);

  const searchMeal = (searchString) => {
    loadMeals(searchString);
  };

  return (
    <main className="main-app">
      <Header searchMeal={searchMeal}></Header>
      <MealContainer meals={meals}></MealContainer>
      <Footer></Footer>
    </main>
  );
}

export default App;
