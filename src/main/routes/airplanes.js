const express = require('express');
const airplanes = require('./weightAndBalance');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send({ 'airplanes': airplanes });
});

module.exports = router;