// models/WeatherData.js
const mysql = require('mysql2');

class WeatherData {
    constructor() {
        // this.db = mysql.createConnection({
        //     host: 'localhost',
        //     user: 'your_username',
        //     password: 'your_password',
        //     database: 'your_database',
        // });
        this.db = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'ashish',
            database: 'weather_data',
        });
        // this.db.connect((err) => {
        //     if (err) {
        //         console.error('Database connection error:', err);
        //     } else {
        //         console.log('Connected to database');
        //     }
        // });
        this.db.connect((err) => {
            if (err) {
                console.error('Database connection error:', err);
            } else {
                console.log('Connected to database');
                // Call a method to create the table if it doesn't exist
                this.createWeatherDataTable();
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

    // Create the weather_data table if it doesn't exist
    createWeatherDataTable() {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS weather_data (
                id INT AUTO_INCREMENT PRIMARY KEY,
                city VARCHAR(255) NOT NULL,
                temperature DECIMAL(5, 2) NOT NULL,
                humidity DECIMAL(5, 2) NOT NULL,
                recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        this.db.query(createTableQuery, (err, results) => {
            if (err) {
                console.error('Error creating weather_data table:', err);
            } else {
                console.log('weather_data table created successfully');
            }
        });
    }
}

module.exports = WeatherData;
