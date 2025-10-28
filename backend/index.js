const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { query, testConnection } = require('./config/database');

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
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await query(
      'SELECT * FROM restaurants WHERE is_active = TRUE ORDER BY rating DESC'
    );
    res.json(restaurants);
  } catch (error) {
    console.error('Erro ao buscar restaurantes:', error);
    res.status(500).json({ error: 'Erro ao buscar restaurantes' });
  }
});

// Rota para buscar um restaurante específico
app.get('/api/restaurants/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const restaurants = await query(
      'SELECT * FROM restaurants WHERE id = ? AND is_active = TRUE',
      [id]
    );
    
    if (restaurants.length === 0) {
      return res.status(404).json({ error: 'Restaurante não encontrado' });
    }
    
    res.json(restaurants[0]);
  } catch (error) {
    console.error('Erro ao buscar restaurante:', error);
    res.status(500).json({ error: 'Erro ao buscar restaurante' });
  }
});

// Rota para criar novo restaurante
app.post('/api/restaurants', async (req, res) => {
  try {
    const { name, cuisine, rating, description, address, phone, image_url } = req.body;
    
    if (!name || !cuisine) {
      return res.status(400).json({ error: 'Nome e culinária são obrigatórios' });
    }
    
    const result = await query(
      'INSERT INTO restaurants (name, cuisine, rating, description, address, phone, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, cuisine, rating || 0, description, address, phone, image_url]
    );
    
    res.status(201).json({ 
      id: result.insertId,
      message: 'Restaurante criado com sucesso!' 
    });
  } catch (error) {
    console.error('Erro ao criar restaurante:', error);
    res.status(500).json({ error: 'Erro ao criar restaurante' });
  }
});

// Rota para atualizar restaurante
app.put('/api/restaurants/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, cuisine, rating, description, address, phone, image_url } = req.body;
    
    const result = await query(
      'UPDATE restaurants SET name = ?, cuisine = ?, rating = ?, description = ?, address = ?, phone = ?, image_url = ? WHERE id = ?',
      [name, cuisine, rating, description, address, phone, image_url, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Restaurante não encontrado' });
    }
    
    res.json({ message: 'Restaurante atualizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao atualizar restaurante:', error);
    res.status(500).json({ error: 'Erro ao atualizar restaurante' });
  }
});

// Rota para deletar restaurante (soft delete)
app.delete('/api/restaurants/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await query(
      'UPDATE restaurants SET is_active = FALSE WHERE id = ?',
      [id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Restaurante não encontrado' });
    }
    
    res.json({ message: 'Restaurante removido com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar restaurante:', error);
    res.status(500).json({ error: 'Erro ao deletar restaurante' });
  }
});

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!' });
});

// Inicializar servidor
async function startServer() {
  // Testar conexão com banco de dados
  const dbConnected = await testConnection();
  
  if (!dbConnected) {
    console.error('⚠️  Servidor iniciado SEM conexão com banco de dados');
    console.error('⚠️  Verifique suas credenciais no arquivo .env');
  }
  
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📍 Acesse: http://localhost:${PORT}`);
  });
}

startServer();

module.exports = app;
