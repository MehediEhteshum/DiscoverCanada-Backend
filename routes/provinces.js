const express = require('express');
const provincesGetter = require('../controllers/provinces');

const router = express.Router();

router
    .route('/')
    .get(provincesGetter);

module.exports = router;
