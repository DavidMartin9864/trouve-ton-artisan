USE trouve_ton_artisan;

-- Catégories
INSERT INTO categorie (nom) VALUES
  ('Bâtiment'),
  ('Services'),
  ('Fabrication'),
  ('Alimentation');

-- Spécialités
INSERT INTO specialite (nom, categorie_id) VALUES
  -- Bâtiment (id=1)
  ('Maçonnerie', 1),
  ('Plomberie', 1),
  ('Électricité', 1),
  ('Charpenterie', 1),
  ('Peinture', 1),
  -- Services (id=2)
  ('Coiffure', 2),
  ('Réparation automobile', 2),
  ('Cordonnerie', 2),
  -- Fabrication (id=3)
  ('Ébénisterie', 3),
  ('Bijouterie', 3),
  ('Céramique', 3),
  -- Alimentation (id=4)
  ('Boulangerie', 4),
  ('Boucherie', 4),
  ('Fromagerie', 4);

-- Artisans
INSERT INTO artisan (nom, specialite_id, localisation, note, a_propos, email, site_web, artisan_du_mois) VALUES
  ('Martin Constructions', 1, 'Lyon, 69001', 4.5, 'Spécialiste en maçonnerie depuis 20 ans, nous intervenons sur tous types de chantiers en Auvergne-Rhône-Alpes.', 'contact@martin-constructions.fr', 'https://martin-constructions.fr', TRUE),
  ('Dupont Plomberie', 2, 'Grenoble, 38000', 4.2, 'Plombier certifié, intervention rapide 7j/7 pour tous vos besoins en plomberie et chauffage.', 'dupont.plomberie@gmail.com', NULL, FALSE),
  ('Élec Pro Lyon', 3, 'Lyon, 69003', 4.8, 'Électricien qualifié RGE, spécialisé dans les installations résidentielles et tertiaires.', 'contact@elecprolyon.fr', 'https://elecprolyon.fr', FALSE),
  ('Charpentes Auvergnates', 4, 'Clermont-Ferrand, 63000', 4.6, 'Entreprise familiale spécialisée dans la charpente traditionnelle et ossature bois depuis 1985.', 'info@charpentes-auvergnates.fr', 'https://charpentes-auvergnates.fr', TRUE),
  ('Couleurs & Co', 5, 'Annecy, 74000', 3.9, 'Peintre décorateur, intérieur et extérieur. Conseils personnalisés pour sublimer votre habitat.', 'couleursetco@orange.fr', NULL, FALSE),
  ('Salon Marie', 6, 'Lyon, 69002', 4.7, 'Salon de coiffure mixte au cœur de Lyon. Spécialiste des colorations naturelles et coupes tendance.', 'salon.marie@gmail.com', 'https://salonmarie-lyon.fr', TRUE),
  ('Garage Perez', 7, 'Saint-Étienne, 42000', 4.0, 'Mécanicien toutes marques. Révision, réparation, diagnostic électronique. Devis gratuit.', 'garage.perez@gmail.com', NULL, FALSE),
  ('La Cordonnerie du Vieux Lyon', 8, 'Lyon, 69005', 4.9, 'Cordonnier artisan depuis 30 ans. Réparation, entretien et fabrication sur mesure de chaussures et maroquinerie.', 'cordonnerie.vieuxlyon@gmail.com', NULL, FALSE),
  ('Atelier Dubois', 9, 'Valence, 26000', 4.3, 'Ébéniste créateur, mobilier contemporain et restauration de meubles anciens. Pièces uniques réalisées à la main.', 'atelier.dubois@gmail.com', 'https://atelier-dubois-ebeniste.fr', FALSE),
  ('Bijoux Céline', 10, 'Grenoble, 38000', 4.6, 'Créatrice de bijoux en argent et pierres naturelles. Bijoux personnalisés sur commande.', 'bijoux.celine@gmail.com', 'https://bijoux-celine.fr', FALSE),
  ('Poterie des Alpilles', 11, 'Chambéry, 73000', 4.1, 'Céramiste artisan, création de pièces décoratives et utilitaires en grès et porcelaine.', 'poterie.alpilles@gmail.com', NULL, FALSE),
  ('Boulangerie Lefebvre', 12, 'Lyon, 69007', 4.8, 'Boulangerie artisanale, pain au levain, viennoiseries maison. Farines biologiques locales.', 'boulangerie.lefebvre@gmail.com', NULL, FALSE),
  ('Boucherie Savoyard', 13, 'Annecy, 74000', 4.5, 'Boucher charcutier, viandes locales et de qualité. Spécialités savoyardes et plats cuisinés maison.', 'boucherie.savoyard@orange.fr', NULL, FALSE),
  ('Fromagerie des Alpes', 14, 'Chambéry, 73000', 4.9, 'Fromager affineur, sélection de fromages savoyards et alpins. Plateau personnalisé pour vos événements.', 'fromagerie.alpes@gmail.com', 'https://fromagerie-des-alpes.fr', FALSE);