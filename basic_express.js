const express = require('express');
const app = express();

const statusNotFound = 404;
const statusOk = 200;

app.get('/', (req, res) => {
    res.status(statusOk).send('Home Page');
});

app.get('/about', (req, res) => {
    res.status(statusOk).send("About Page");
});

app.all('*', (req, res) => {
    res.status(statusNotFound).send('<h1>Resource not found</h1>')
});

app.listen(5000, () => {
    console.log('Server is listening at port 5000.');
});

// app.get

//app.post

//app.put

//app.delete

//app.all

//app.use

//app.listen