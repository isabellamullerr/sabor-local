import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import LocationMap from './LocationMap';
import './RestaurantList.css';

function RestaurantList() {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/restaurants');
        
        if (!response.ok) {
          throw new Error('Erro ao carregar restaurantes');
        }
        
        const data = await response.json();
        setRestaurants(data);
        setFilteredRestaurants(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Erro ao buscar restaurantes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Aplicar filtros e busca
  useEffect(() => {
    let filtered = restaurants;

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por culinária
    if (cuisineFilter) {
      filtered = filtered.filter(restaurant =>
        restaurant.cuisine === cuisineFilter
      );
    }

    setFilteredRestaurants(filtered);
  }, [searchTerm, cuisineFilter, restaurants]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (cuisine) => {
    setCuisineFilter(cuisine);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Carregando restaurantes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>⚠️ Ops! Algo deu errado</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="restaurant-list">
      <h2>🍽️ Restaurantes Locais</h2>
      <p className="subtitle">Descubra os melhores sabores da sua região</p>
      
      <LocationMap />
      
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      
      <div className="restaurants-grid">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            {restaurant.image_url && (
              <div className="restaurant-image">
                <img src={restaurant.image_url} alt={restaurant.name} />
              </div>
            )}
            <div className="restaurant-header">
              <h3>{restaurant.name}</h3>
              <span className="rating">⭐ {restaurant.rating}</span>
            </div>
            <div className="restaurant-body">
              <p className="cuisine">
                <span className="label">Culinária:</span> {restaurant.cuisine}
              </p>
              {restaurant.description && (
                <p className="description-preview">{restaurant.description.substring(0, 80)}...</p>
              )}
            </div>
            <div className="restaurant-footer">
              <button 
                className="btn-details"
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
              >
                Ver detalhes
              </button>
              <button className="btn-order">Fazer pedido</button>
            </div>
          </div>
        ))}
      </div>

      {filteredRestaurants.length === 0 && !loading && (
        <div className="empty-state">
          <p>Nenhum restaurante encontrado com os filtros selecionados.</p>
          <button onClick={() => { setSearchTerm(''); setCuisineFilter(''); }}>
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}

export default RestaurantList;
