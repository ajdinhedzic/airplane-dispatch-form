const express = require('express');
const airportRoutes = require('./routes/airports');

const app = express();
app.use('/api/airports', airportRoutes);

module.exports = app;