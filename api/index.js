const express = require('express');
const cors = require('cors');
const restaurantsRoutes = require('../backend/routes/restaurants');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/restaurants', restaurantsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    service: 'Sabor Local Backend',
    database: process.env.DB_HOST ? 'Configurado' : 'Não configurado'
  });
});

module.exports = app;
