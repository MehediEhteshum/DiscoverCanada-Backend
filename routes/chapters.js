const express = require('express');
const chaptersGetter = require('../controllers/chapters');

const router = express.Router();

router
    .route('/')
    .get(chaptersGetter);

module.exports = router;
