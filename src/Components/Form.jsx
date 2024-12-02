// src/Components/Form.jsx
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.name.trim().length > 5 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError(false);
      alert(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      console.log("Form data:", formData);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre (min 6 caracteres)"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit">Enviar</button>
      {error && <p style={{ color: "red" }}>Por favor verifique su información nuevamente</p>}
    </form>
  );
};

export default Form;
