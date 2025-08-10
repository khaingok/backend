const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

module.exports = router;
