// Wrapper para expor o Express app do backend como Serverless Function da Vercel
const app = require('../backend/index.js');

// Forçar caminho base /api para evitar colisão com rotas raiz do backend
// (opcional: já usamos /api/* no frontend)

module.exports = (req, res) => {
	return app(req, res);
};
