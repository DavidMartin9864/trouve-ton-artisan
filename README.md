# 🔨 Trouve ton Artisan

Plateforme officielle des artisans de la région Auvergne-Rhône-Alpes.

## 📋 Présentation

Ce projet permet aux particuliers de trouver un artisan et de le contacter facilement via un formulaire de contact.

## 🛠️ Technologies utilisées

### Frontend
- ReactJS + Vite
- Bootstrap 5
- Sass
- React Router DOM
- Axios

### Backend
- Node.js
- Express
- Sequelize
- MySQL
- Nodemailer

## ⚙️ Prérequis

- Node.js >= 18
- MySQL >= 8 ou MariaDB >= 10.6
- npm >= 9

## 🚀 Installation

### 1. Cloner le dépôt
```bash
git clone https://github.com/votre-repo/trouve-ton-artisan.git
cd trouve-ton-artisan
```

### 2. Base de données
```bash
mysql -u root -p < database/create.sql
mysql -u root -p < database/seed.sql
```

### 3. Backend
```bash
cd backend
cp .env.example .env
# Remplir les variables dans .env
npm install
npm run dev
```

### 4. Frontend
```bash
cd frontend
cp .env.example .env
# Remplir les variables dans .env
npm install
npm run dev
```

## 🔐 Variables d'environnement

### Backend `.env`
| Variable | Description |
|---|---|
| PORT | Port du serveur (défaut : 5000) |
| DB_HOST | Hôte MySQL |
| DB_USER | Utilisateur MySQL |
| DB_PASSWORD | Mot de passe MySQL |
| DB_NAME | Nom de la base de données |
| API_KEY | Clé secrète pour l'authentification API |
| FRONTEND_URL | URL du frontend (CORS) |
| MAIL_HOST | Serveur SMTP |
| MAIL_USER | Email expéditeur |
| MAIL_PASS | Mot de passe email |

### Frontend `.env`
| Variable | Description |
|---|---|
| VITE_API_URL | URL de l'API backend |
| VITE_API_KEY | Clé API (identique à backend) |

## 🔒 Sécurité mise en place

- Authentification par clé API (`x-api-key`)
- CORS restreint au domaine frontend
- Helmet (headers HTTP sécurisés)
- Rate limiting (100 requêtes / 15 min par IP)
- Validation des entrées utilisateur
- Protection injection SQL via Sequelize
- Limitation de la taille des body JSON (10kb)

## 📁 Structure du projet
```
trouve-ton-artisan/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── styles/
├── database/
│   ├── create.sql
│   └── seed.sql
└── README.md
```

## 👤 Auteur

Projet réalisé dans le cadre d'une formation développeur web.