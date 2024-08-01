// App.js
import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList.jsx'; // Asegúrate de que esta ruta sea correcta
import SearchPage from './components/SearchPage'; // Asegúrate de que esta ruta sea correcta

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para la navegación de páginas

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="main-container">
      <nav className="navbar">
        <span className="youtube-icon">🔴</span> {/* Icono de YouTube */}
        <span className="star-icon">★</span> {/* Icono de estrella */}
        <button onClick={() => handlePageChange('home')}>Inicio</button>
        <button onClick={() => handlePageChange('search')}>Búsqueda</button>
      </nav>
      {currentPage === 'home' ? <MovieList /> : <SearchPage />} {/* Renderizado condicional */}
    </div>
  );
}

export default App;
