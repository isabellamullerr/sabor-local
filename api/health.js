const mysql = require('mysql2/promise');

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

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const connection = await pool.getConnection();
    connection.release();
    
    return res.status(200).json({ 
      status: 'OK',
      service: 'Sabor Local Backend',
      database: 'Conectado',
      timestamp: new Date().toISOString(),
      env: {
        host: process.env.DB_HOST ? 'configurado' : 'faltando',
        user: process.env.DB_USER ? 'configurado' : 'faltando',
        database: process.env.DB_NAME ? 'configurado' : 'faltando'
      }
    });
  } catch (error) {
    return res.status(500).json({ 
      status: 'ERROR',
      service: 'Sabor Local Backend',
      database: 'Erro de conexao',
      error: error.message,
      details: error.toString()
    });
  }
};
