import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container ">
        <div className="row-flex">
          <div className="logo">
            <a href="/">The Meal </a>
          </div>

          <div className="search">
            <input type="text" placeholder="Search your favorite meal..." />
            <button>Search Meal</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
