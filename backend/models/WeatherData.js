// models/WeatherData.js
const mysql = require('mysql2');

class WeatherData {
  constructor() {
    this.db = mysql.createConnection({
      host: 'localhost',
      user: 'your_username',
      password: 'your_password',
      database: 'your_database',
    });

    this.db.connect((err) => {
      if (err) {
        console.error('Database connection error:', err);
      } else {
        console.log('Connected to database');
      }
    });
  }

  // CRUD operations

  // Create new weather data
  create(data, callback) {
    this.db.query('INSERT INTO weather_data SET ?', data, callback);
  }

  // Read all weather data
  getAll(callback) {
    this.db.query('SELECT * FROM weather_data', callback);
  }

  // Update weather data by ID
  update(id, data, callback) {
    this.db.query('UPDATE weather_data SET ? WHERE id = ?', [data, id], callback);
  }

  // Delete weather data by ID
  delete(id, callback) {
    this.db.query('DELETE FROM weather_data WHERE id = ?', id, callback);
  }
}

module.exports = WeatherData;
