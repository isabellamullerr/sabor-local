import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');

  const cuisines = [
    'Todas',
    'Brasileira',
    'Italiana',
    'Japonesa',
    'Mexicana',
    'Chinesa',
    'Francesa',
    'Hamburguer',
    'Churrasco',
    'Frutos do Mar',
    'Vegetariana'
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setSelectedCuisine(value);
    onFilter(value === 'Todas' ? '' : value);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar restaurante..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="filter-wrapper">
          <span className="filter-icon">🍽️</span>
          <select
            value={selectedCuisine}
            onChange={handleFilter}
            className="filter-select"
          >
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
