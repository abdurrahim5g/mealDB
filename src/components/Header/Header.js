import React, { useState } from "react";
import "./Header.css";

const Header = ({ searchMeal }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <nav className="navbar">
      <div className="container ">
        <div className="row-flex">
          <div className="logo">
            <a href="/">The Meal </a>
          </div>

          <div className="search">
            <input
              type="text"
              placeholder="Search your favorite meal..."
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyUp={(e) =>
                e.key === "Enter" ? searchMeal(searchValue) : ""
              }
            />
            <button onClick={() => searchMeal(searchValue)}>Search Meal</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
