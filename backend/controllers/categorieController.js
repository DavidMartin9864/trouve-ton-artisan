const { Categorie, Specialite } = require('../models');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      include: [{ model: Specialite, as: 'specialites' }],
      order: [['nom', 'ASC']],
    });
    res.json({ success: true, data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erreur serveur.' });
  }
};