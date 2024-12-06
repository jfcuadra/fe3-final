import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    if (!favs.some((fav) => fav.id === id)) {
      favs.push({ name, username, id });
      localStorage.setItem("favs", JSON.stringify(favs));
      alert("Agregado a Favoritos!");
    } else {
      alert("Elemento en Favoritos!");
    }
  };

  return (
    <div className="card">
      <img src="/img/doctor.jpg" alt={name} className="card-img" />
      <h3>{name}</h3>
      <p>{username}</p>
      <Link to={`/dentist/${id}`}>Ver detalles</Link>
      <button onClick={addFav} className="favButton">Agregar a Favoritos</button>
    </div>
  );
};

export default Card;

