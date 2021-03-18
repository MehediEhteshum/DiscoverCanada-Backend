express = require('express');
chaptersGetter = require('../controllers/chapters');

router = express.Router();

router
    .route('/')
    .get(chaptersGetter);

module.exports = router;
