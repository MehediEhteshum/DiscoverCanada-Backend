express = require('express');
topicsGetter = require('../controllers/topics');

router = express.Router();

router
    .route('/')
    .get(topicsGetter);

module.exports = router;
