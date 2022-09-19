const express = require('express');
const app = express();

const PORT = 8080;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}, ${new Date().toISOString()}`);
    next();
});

app.get('/home', (req, res) => {
    res.json({javascript: 'object'});
});

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server', err);
    }
    console.log(`Server started on port ${PORT}`);
});
