const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "assets" directory and the project root
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(__dirname))

// Serve index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Additional routes for other HTML files
app.get('/elements', (req, res) => {
  res.sendFile(path.join(__dirname, 'elements.html'));
});

app.get('/generic', (req, res) => {
  res.sendFile(path.join(__dirname, 'generic.html'));
});

app.get('/landing', (req, res) => {
  res.sendFile(path.join(__dirname, 'landing.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
