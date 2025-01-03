const express = require('express');
const path = require('path');
const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'view'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { text: 'World' });
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
    res.render('index', { text: 'World' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});