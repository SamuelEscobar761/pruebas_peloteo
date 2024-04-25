// src/components/Buscador.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';

function Buscador() {
  const [busqueda, setBusqueda] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de búsqueda
    console.log('Buscando:', busqueda);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 text-center">
      <input
        type="text"
        placeholder="Buscar eventos..."
        value={busqueda}
        onChange={handleChange}
        className="border border-002D62 bg-white-100 p-2 mr-2 rounded-lg focus:outline-none focus:border-002D62 text-lg font-semibold shadow-md text-blue-900"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 shadow-md" style={{ backgroundColor: '#002D62' }}>
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
