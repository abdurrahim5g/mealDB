import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MealContainer from "./components/MealContainer/MealContainer";

function App() {
  return (
    <main className="main-app">
      <Header></Header>
      <MealContainer></MealContainer>
      <Footer></Footer>
    </main>
  );
}

export default App;
