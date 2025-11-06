const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rotas dinamicamente
let restaurantsRoutes;
try {
  restaurantsRoutes = require('../backend/routes/restaurants');
  app.use('/api/restaurants', restaurantsRoutes);
} catch (error) {
  console.error('Erro ao carregar rotas:', error);
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    service: 'Sabor Local Backend',
    database: process.env.DB_HOST ? 'Configurado' : 'Não configurado',
    timestamp: new Date().toISOString()
  });
});

// Exportar como serverless function
module.exports = app;
