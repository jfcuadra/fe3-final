// src/Routes/Favs.jsx
import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <div>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favs.map((fav) => (
          <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
