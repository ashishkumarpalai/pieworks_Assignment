// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Create a MySQL connection
// const db = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'ashish',
//     database: 'ecommerce',
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Database connection error:', err);
//     } else {
//         console.log('Connected to database');
//     }
// });

// // Define your API endpoints and routes here
// app.get('/', (req, res) => {
//     db.query('SELECT * FROM ecommerce.brands', (err, results) => {
//         if (err) {
//             console.error('Error fetching data:', err);
//             res.status(500).json({ error: 'Error fetching data' });
//         } else {
//             res.json(results);
//         }
//     });
// });


// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const weatherRoutes = require('./routes/weather');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/weather', weatherRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
