const metarParser = require('./../metarParser');
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
   console.log('requesting airport: ', req.originalUrl);
   next();
});

router.get('/:airportId/metar', async (req, res) => {
    const airport = req.params.airportId;
    const currentMetar = await metarParser.fetchWeatherFor(airport);
    res.send(currentMetar);
});

module.exports = router;