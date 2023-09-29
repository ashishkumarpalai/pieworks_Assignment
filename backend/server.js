const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const weatherRoutes = require('./routes/weather');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


app.get("/", async (req, res) => {
    res.send(`<h1 style="text-align: center; color: blue;">Welcome to piworks Assignment MySQL Database used</h1>`);
    console.log("wellcome to piWorks mysql backend")
})

// API routes
app.use('/api/weather', weatherRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
