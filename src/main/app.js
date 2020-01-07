const express = require('express');
const airportRoutes = require('./routes/airports');
const airplanes = require('./routes/airplanes');

const app = express();
app.use('/api/airports', airportRoutes);
app.use('/api/airplanes', airplanes);

module.exports = app;