// src/Routes/Home.jsx
import React, { useEffect, useContext } from "react";
import { ContextGlobal } from "../Components/utils/ContextGlobal";
import Card from "../Components/Card";
import axios from "axios";

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({ type: "SET_DATA", payload: response.data });
      });
  }, [dispatch]);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
