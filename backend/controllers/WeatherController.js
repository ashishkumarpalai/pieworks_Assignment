// controllers/WeatherController.js
const WeatherData = require('../models/WeatherData');

const weatherDataModel = new WeatherData();

module.exports = {
  createWeatherData: (req, res) => {
    const newData = req.body;

    weatherDataModel.create(newData, (err, result) => {
      if (err) {
        console.error('Error creating weather data:', err);
        res.status(500).json({ error: 'Error creating weather data' });
      } else {
        res.status(201).json(result);
      }
    });
  },

  getAllWeatherData: (req, res) => {
    weatherDataModel.getAll((err, results) => {
      if (err) {
        console.error('Error fetching weather data:', err);
        res.status(500).json({ error: 'Error fetching weather data' });
      } else {
        res.status(200).json(results);
      }
    });
  },

  updateWeatherData: (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    weatherDataModel.update(id, updatedData, (err, result) => {
      if (err) {
        console.error('Error updating weather data:', err);
        res.status(500).json({ error: 'Error updating weather data' });
      } else {
        res.status(200).json(result);
      }
    });
  },

  deleteWeatherData: (req, res) => {
    const { id } = req.params;

    weatherDataModel.delete(id, (err, result) => {
      if (err) {
        console.error('Error deleting weather data:', err);
        res.status(500).json({ error: 'Error deleting weather data' });
      } else {
        res.status(200).json(result);
      }
    });
  },
};
