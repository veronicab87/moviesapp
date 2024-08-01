import React, { useState } from 'react';

export default function SearchBar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchData(searchQuery);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  async function fetchData(query) {
    const endpoint = `https://api.themoviedb.org/3/search/movie?language=es-ES&query=${query}&page=1`;
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer TEST-2054487777337273-052213-6f8f8c7b1d2a7a6d0e2e6ab9e6da8b57-0',
      },
    };

    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    handleSearch(data.results); // Assuming handleSearch updates your movie list
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput">Buscar Películas:</label>
        <input
          type="text"
          id="searchInput"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Buscar Películas"
        />
        <button type="submit">buscar película</button>
      </form>
    </div>
  );
}

