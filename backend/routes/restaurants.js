const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET - Listar todos os restaurantes
router.get('/', async (req, res) => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM restaurantes ORDER BY nome');
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
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM restaurantes WHERE id = ?', [id]);
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

module.exports = router;
