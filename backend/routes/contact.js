const express = require('express');
const router  = express.Router();
const { sendContact } = require('../controllers/contactController');

router.post('/:id', sendContact);
module.exports = router;