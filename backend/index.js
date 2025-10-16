const express = require('express');
const cors = require('cors');

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

// Rota de health check para o Vercel
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    service: 'Sabor Local Backend'
  });
});

// Rota exemplo para produtos/restaurantes
app.get('/api/restaurants', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Restaurante Local 1',
      cuisine: 'Brasileira',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Pizzaria da Esquina',
      cuisine: 'Italiana',
      rating: 4.2
    }
  ]);
});

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 Acesse: http://localhost:${PORT}`);
});

module.exports = app;
