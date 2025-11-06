const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Criar pool de conexões MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Health check
app.get('/api/health', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    connection.release();
    res.json({ 
      status: 'OK',
      service: 'Sabor Local Backend',
      database: 'Conectado',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'ERROR',
      service: 'Sabor Local Backend',
      database: 'Erro de conexão',
      error: error.message
    });
  }
});

// GET - Listar todos os restaurantes
app.get('/api/restaurants', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM restaurants ORDER BY name');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar restaurantes:', error);
    res.status(500).json({ 
      error: 'Erro ao buscar restaurantes',
      message: error.message 
    });
  }
});

// GET - Buscar restaurante por ID
app.get('/api/restaurants/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM restaurants WHERE id = ?', [id]);
    connection.release();
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Restaurante não encontrado' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Erro ao buscar restaurante:', error);
    res.status(500).json({ 
      error: 'Erro ao buscar restaurante',
      message: error.message 
    });
  }
});

// Exportar como serverless function
module.exports = app;
