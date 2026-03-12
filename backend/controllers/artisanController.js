const { Artisan, Specialite, Categorie } = require('../models');
const { Op } = require('sequelize');

exports.getAllArtisans = async (req, res) => {
  try {
    const { search, categorie_id, specialite_id } = req.query;
    const where = {};
    const specialiteWhere = {};
    const categorieWhere = {};

    if (search)       where.nom          = { [Op.like]: `%${search}%` };
    if (specialite_id) specialiteWhere.id = specialite_id;
    if (categorie_id)  categorieWhere.id  = categorie_id;

    const artisans = await Artisan.findAll({
      where,
      include: [{
        model: Specialite,
        as: 'specialite',
        where: specialiteWhere,
        include: [{ model: Categorie, as: 'categorie', where: categorieWhere }],
      }],
      order: [['nom', 'ASC']],
    });
    res.json({ success: true, data: artisans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erreur serveur.' });
  }
};

exports.getArtisansDuMois = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { artisan_du_mois: true },
      include: [{
        model: Specialite,
        as: 'specialite',
        include: [{ model: Categorie, as: 'categorie' }],
      }],
      limit: 3,
    });
    res.json({ success: true, data: artisans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erreur serveur.' });
  }
};

exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [{
        model: Specialite,
        as: 'specialite',
        include: [{ model: Categorie, as: 'categorie' }],
      }],
    });
    if (!artisan) return res.status(404).json({ success: false, message: 'Artisan non trouvé.' });
    res.json({ success: true, data: artisan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erreur serveur.' });
  }
};