// Wrapper para expor o Express app do backend como Serverless Function da Vercel
const app = require('../backend/index.js');

// Em Vercel, exportar a função (Express é um handler compatível)
module.exports = app;
