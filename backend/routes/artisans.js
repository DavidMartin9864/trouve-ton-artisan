const express = require('express');
const router  = express.Router();
const { getAllArtisans, getArtisansDuMois, getArtisanById } = require('../controllers/artisanController');

router.get('/',        getAllArtisans);
router.get('/du-mois', getArtisansDuMois);
router.get('/:id',     getArtisanById);
module.exports = router;