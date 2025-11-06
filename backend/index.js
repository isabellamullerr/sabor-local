const express = require('express');
const cors = require('cors');

// Forçar modo MOCK (sem banco de dados) na produção até configurar AlwaysData
const USE_MOCK_DATA = !process.env.DB_HOST || process.env.USE_MOCK === 'true';

console.log('🔧 Modo de operação:', USE_MOCK_DATA ? 'MOCK DATA (sem banco)' : 'DATABASE (com banco)');

// Variáveis para database (opcional)
let query = null;
let testConnection = null;

// Tentar carregar variáveis de ambiente (opcional)
try {
  require('dotenv').config();
} catch (error) {
  console.log('⚠️ dotenv não disponível, usando configurações padrão');
}

// Tentar importar database apenas se não estiver em modo mock
if (!USE_MOCK_DATA) {
  try {
    const db = require('./config/database');
    query = db.query;
    testConnection = db.testConnection;
    console.log('✅ Database configurado e conectado');
  } catch (error) {
    console.log('⚠️ Database não configurado, forçando dados mockados');
    console.log('Erro:', error.message);
    query = null;
    testConnection = null;
  }
} else {
  console.log('✅ Usando dados mockados (mock data)');
}

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
    // Se tiver banco de dados configurado, usar
    if (query) {
      const restaurants = await query(
        'SELECT * FROM restaurants WHERE is_active = TRUE ORDER BY rating DESC'
      );
      res.json(restaurants);
    } else {
      // Dados mockados para quando não tiver banco configurado
      const mockRestaurants = [
        {
          id: 1,
          name: 'Restaurante Sabor Mineiro',
          cuisine: 'Brasileira',
          rating: 4.8,
          address: 'Rua das Flores, 123',
          city: 'São Paulo',
          phone: '(11) 98765-4321',
          description: 'Comida caseira mineira',
          image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400'
        },
        {
          id: 2,
          name: 'Pizzaria da Esquina',
          cuisine: 'Italiana',
          rating: 4.5,
          address: 'Av. Paulista, 456',
          city: 'São Paulo',
          phone: '(11) 91234-5678',
          description: 'Pizzas artesanais no forno a lenha',
          image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400'
        },
        {
          id: 3,
          name: 'Sushi House',
          cuisine: 'Japonesa',
          rating: 4.7,
          address: 'Rua dos Pinheiros, 789',
          city: 'São Paulo',
          phone: '(11) 99876-5432',
          description: 'Sushi fresco e tradicional',
          image_url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400'
        }
      ];
      res.json(mockRestaurants);
    }
  } catch (error) {
    console.error('Erro ao buscar restaurantes:', error);
    res.status(500).json({ error: 'Erro ao buscar restaurantes' });
  }
});

// Rota para buscar um restaurante específico
app.get('/api/restaurants/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (query) {
      const restaurants = await query(
        'SELECT * FROM restaurants WHERE id = ? AND is_active = TRUE',
        [id]
      );
      
      if (restaurants.length === 0) {
        return res.status(404).json({ error: 'Restaurante não encontrado' });
      }
      
      res.json(restaurants[0]);
    } else {
      // Dados mockados
      const mockRestaurants = {
        '1': {
          id: 1,
          name: 'Restaurante Sabor Mineiro',
          cuisine: 'Brasileira',
          rating: 4.8,
          address: 'Rua das Flores, 123',
          city: 'São Paulo',
          phone: '(11) 98765-4321',
          description: 'Comida caseira mineira',
          image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400'
        },
        '2': {
          id: 2,
          name: 'Pizzaria da Esquina',
          cuisine: 'Italiana',
          rating: 4.5,
          address: 'Av. Paulista, 456',
          city: 'São Paulo',
          phone: '(11) 91234-5678',
          description: 'Pizzas artesanais no forno a lenha',
          image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400'
        }
      };
      
      const restaurant = mockRestaurants[id];
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurante não encontrado' });
      }
      res.json(restaurant);
    }
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
