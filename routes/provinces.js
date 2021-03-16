express = require('express');
provincesGetter = require('../controllers/provinces');

router = express.Router();

router
    .route('/')
    .get(provincesGetter);

module.exports = router;
