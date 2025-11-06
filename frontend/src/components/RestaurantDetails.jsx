import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RestaurantDetails.css';

function RestaurantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        setLoading(true);
  const API_BASE = import.meta.env.VITE_API_URL || '';
  const response = await fetch(`${API_BASE}/api/restaurants/${id}`);
        
        if (!response.ok) {
          throw new Error('Restaurante não encontrado');
        }
        
        const data = await response.json();
        setRestaurant(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Erro ao buscar restaurante:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Carregando detalhes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>⚠️ Ops! Algo deu errado</h3>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>
          Voltar para lista
        </button>
      </div>
    );
  }

  if (!restaurant) {
    return null;
  }

  return (
    <div className="restaurant-details">
      <button className="btn-back" onClick={() => navigate('/')}>
        ← Voltar
      </button>

      <div className="details-container">
        {restaurant.image_url && (
          <div className="details-image">
            <img src={restaurant.image_url} alt={restaurant.name} />
          </div>
        )}

        <div className="details-content">
          <div className="details-header">
            <h1>{restaurant.name}</h1>
            <span className="rating-large">⭐ {restaurant.rating}</span>
          </div>

          <div className="details-info">
            <div className="info-item">
              <span className="info-label">🍽️ Culinária:</span>
              <span className="info-value">{restaurant.cuisine_type}</span>
            </div>

            {restaurant.address && (
              <div className="info-item">
                <span className="info-label">📍 Endereço:</span>
                <span className="info-value">{restaurant.address}</span>
              </div>
            )}

            {restaurant.phone && (
              <div className="info-item">
                <span className="info-label">📞 Telefone:</span>
                <span className="info-value">{restaurant.phone}</span>
              </div>
            )}

            {restaurant.description && (
              <div className="info-item description">
                <span className="info-label">📝 Sobre:</span>
                <p className="info-value">{restaurant.description}</p>
              </div>
            )}
          </div>

          <div className="details-actions">
            <button className="btn-order-large">
              🛒 Fazer Pedido
            </button>
            <button className="btn-favorite">
              ❤️ Adicionar aos Favoritos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
