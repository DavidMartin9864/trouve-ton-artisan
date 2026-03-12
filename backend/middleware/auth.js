require('dotenv').config();

const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({
      success: false,
      message: 'Accès non autorisé. Clé API manquante ou invalide.',
    });
  }
  next();
};

module.exports = apiKeyAuth;