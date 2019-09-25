const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/airports/:airportId/metar', (req, res) => {
    console.log(req.params)
    res.send({ metar: 'KAMW 250053Z AUTO 18008G16KT 10SM CLR 24/20 A2966 RMK AO2 PRESRR SLP034 T02440200' })
});

app.post('/', (req, res) => {
    res.send({ token: 'abc-def-ghi' })
});