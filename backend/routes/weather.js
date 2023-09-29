// routes/weather.js
const express = require('express');
require("dotenv").config()
const router = express.Router();
const weatherController = require('../controllers/WeatherController');

// Create new weather data
router.post('/', weatherController.createWeatherData);

// Get all weather data
router.get('/', weatherController.getAllWeatherData);

// Update weather data by ID
router.put('/:id', weatherController.updateWeatherData);

// Delete weather data by ID
router.delete('/:id', weatherController.deleteWeatherData);

// Search for weather data by city name
router.get('/:city', weatherController.searchWeatherData);
module.exports = router;
