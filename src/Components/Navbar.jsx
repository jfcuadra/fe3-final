// src/Components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/ContextGlobal";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "SET_THEME", payload: state.theme === "light" ? "dark" : "light" });
  };

  return (
    <nav className={state.theme}>
      <Link to="/">Home</Link>
      <Link to="/favs">Favoritos</Link>
      <Link to="/contact">Contacto</Link>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </nav>
  );
};

export default Navbar;
