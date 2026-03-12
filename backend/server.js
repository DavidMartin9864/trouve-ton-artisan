const express    = require('express');
const cors       = require('cors');
const helmet     = require('helmet');
const rateLimit  = require('express-rate-limit');
const sequelize  = require('./config/database');
const apiKeyAuth = require('./middleware/auth');
require('./models');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Trop de requêtes, réessayez plus tard.' },
});
app.use('/api', limiter);
app.use(express.json({ limit: '10kb' }));
app.use('/api', apiKeyAuth);

app.use('/api/categories', require('./routes/categories'));
app.use('/api/artisans',   require('./routes/artisans'));
app.use('/api/contact',    require('./routes/contact'));

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route introuvable.' });
});

sequelize.authenticate()
  .then(() => {
    console.log('✅ Connexion BDD établie.');
    app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
  })
  .catch(err => console.error('❌ Erreur BDD :', err));