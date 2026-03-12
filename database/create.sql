-- ============================================
-- SCRIPT DE CRÉATION DE LA BASE DE DONNÉES
-- Trouve ton Artisan - Région Auvergne-Rhône-Alpes
-- ============================================

CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

-- Table des catégories
CREATE TABLE categorie (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des spécialités
CREATE TABLE specialite (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  categorie_id INT UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (categorie_id) REFERENCES categorie(id) ON DELETE RESTRICT
);

-- Table des artisans
CREATE TABLE artisan (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  specialite_id INT UNSIGNED NOT NULL,
  localisation VARCHAR(200) NOT NULL,
  note DECIMAL(2,1) DEFAULT 0 CHECK (note >= 0 AND note <= 5),
  photo VARCHAR(255) DEFAULT NULL,
  a_propos TEXT DEFAULT NULL,
  email VARCHAR(150) NOT NULL,
  site_web VARCHAR(255) DEFAULT NULL,
  artisan_du_mois BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (specialite_id) REFERENCES specialite(id) ON DELETE RESTRICT
);

-- Index pour la recherche
CREATE INDEX idx_artisan_nom ON artisan(nom);
CREATE INDEX idx_artisan_specialite ON artisan(specialite_id);