const express = require('express');
const topicsGetter = require('../controllers/topics');

const router = express.Router();

router
    .route('/topics')
    .get(topicsGetter);

module.exports = router;
