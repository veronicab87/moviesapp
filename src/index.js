import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

function handleSearch(query) {
  // Aquí puedes implementar la lógica para buscar películas según la query
  console.log('Buscando películas con la query:', query);
  // Por ahora, solo muestra un mensaje en la consola

  // También puedes actualizar el estado o realizar otras acciones según tu necesidad
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas medir el rendimiento en tu aplicación, puedes usar reportWebVitals
reportWebVitals();
