const express = require('express');
const specificChaptersGetter = require('../controllers/specific_chapters');

const router = express.Router();
const specificChaptersPath = '/:topic_id/:province_name/chapters';

router
    .route(specificChaptersPath)
    .get(specificChaptersGetter);

module.exports = router;
