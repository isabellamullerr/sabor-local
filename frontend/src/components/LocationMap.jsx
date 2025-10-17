import { useState, useEffect } from 'react';
import './LocationMap.css';

function LocationMap() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLoading(false);
        },
        (error) => {
          setError("Não foi possível obter sua localização");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocalização não suportada pelo navegador");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="location-map">
        <div className="map-loading">
          <div className="map-spinner"></div>
          <p>Obtendo sua localização...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="location-map">
        <div className="map-error">
          <span className="map-icon">📍</span>
          <p>{error}</p>
          <small>Permitir acesso à localização para ver restaurantes próximos</small>
        </div>
      </div>
    );
  }

  return (
    <div className="location-map">
      <div className="map-header">
        <span className="map-pin">📍</span>
        <div className="map-info">
          <h3>Sua Localização Atual</h3>
          <p className="coordinates">
            Lat: {location.lat.toFixed(4)}, Lng: {location.lng.toFixed(4)}
          </p>
        </div>
      </div>
      
      <div className="map-container">
        <iframe
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0, borderRadius: '12px' }}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.lng - 0.01}%2C${location.lat - 0.01}%2C${location.lng + 0.01}%2C${location.lat + 0.01}&layer=mapnik&marker=${location.lat}%2C${location.lng}`}
          allowFullScreen
        ></iframe>
        <div className="map-overlay">
          <a 
            href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="open-maps-btn"
          >
            🗺️ Abrir no Google Maps
          </a>
        </div>
      </div>

      <div className="location-features">
        <div className="feature-item">
          <span className="feature-icon">🍽️</span>
          <span>Encontre restaurantes próximos</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🚚</span>
          <span>Delivery rápido na sua região</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">⭐</span>
          <span>Melhores avaliações perto de você</span>
        </div>
      </div>
    </div>
  );
}

export default LocationMap;
