import React from "react";
import "./headerStyle.css";
const Header = ({ title }) => {
  return (
    <header className="modo-header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
