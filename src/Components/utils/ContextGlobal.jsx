// src/Components/utils/ContextGlobal.jsx
import { createContext, useReducer } from "react";

// Estado inicial del contexto
export const initialState = {
  theme: "light", // Tema inicial
  data: [], // Datos de la API
};

// Reducer para manejar las acciones del contexto
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

// Creación del contexto
export const ContextGlobal = createContext();

// Proveedor del contexto
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
