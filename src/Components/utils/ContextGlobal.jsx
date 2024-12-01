// src/Components/utils/ContextGlobal.jsx
import { createContext, useReducer } from "react";

export const initialState = {
  theme: "light", // Tema inicial
  data: [], // Datos de la API
};

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
