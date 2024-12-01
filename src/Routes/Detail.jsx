// src/Routes/Detail.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/ContextGlobal";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const dentist = state.data.find((dentist) => dentist.id === parseInt(id));

  return dentist ? (
    <div>
      <h1>Detail Dentist {id}</h1>
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  ) : (
    <p>Dentist not found</p>
  );
};

export default Detail;
