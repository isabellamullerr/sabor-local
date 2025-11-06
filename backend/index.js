const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de teste
app.get('/', (req, res) => {
  res.json({ 
    message: 'Sabor Local API está funcionando!',
    timestamp: new Date().toISOString()
  });
});

// Rota de health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    service: 'Sabor Local Backend',
    database: process.env.DB_HOST ? 'Configurado' : 'Não configurado'
  });
});

// Importar e usar rotas de restaurantes
try {
  const restaurantsRoutes = require('./routes/restaurants');
  app.use('/api/restaurants', restaurantsRoutes);
  console.log('Rotas de restaurantes carregadas');
} catch (error) {
  console.error('Erro ao carregar rotas: ' + error.message);
}

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!', message: err.message });
});

// Inicializar servidor
app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
  console.log('Acesse: http://localhost:' + PORT);
  console.log('Banco: ' + (process.env.DB_HOST || 'NAO configurado'));
});

module.exports = app;
