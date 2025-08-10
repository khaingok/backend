const express = require('express');
const router = express.Router();

const homepageRoute = require('./routes/Homepage');
const scoreRoute = require('./routes/score');

router.use('/', homepageRoute);
router.use('/', scoreRoute);

module.exports = router;
