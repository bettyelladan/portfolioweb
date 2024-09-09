const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'My Portfolio' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const port = process.env.PORT || 5501; // Change to another port like 5501
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});