// Wrapper para expor o Express app do backend como Serverless Function da Vercel
const app = require('../backend/index.js');

// Normaliza path para garantir que /api/* chegue igual ao Express
module.exports = (req, res) => {
	// Nada especial: Express já lida com /api/health, /api/restaurants etc.
	return app(req, res);
};
