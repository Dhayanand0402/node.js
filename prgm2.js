const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/users', (req, res) => {
    res.send('Here is the Users List');
});

app.listen(3000, () => console.log('Express Server running'));

// npm install express
// node P2.js