const express = require('express');
const provincesGetter = require('../controllers/provinces');

const router = express.Router();

router
    .route('/provinces')
    .get(provincesGetter);

module.exports = router;
