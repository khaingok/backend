const express = require('express');
const router = express.Router();

const homepageRoute = require('./routes/Homepage');
const scoreRoute = require('./routes/score');
const gameRoute = require('./routes/game');

router.use('/', homepageRoute);
router.use('/', scoreRoute);
router.use('/', gameRoute);

module.exports = router;
