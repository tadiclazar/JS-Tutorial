const http = require('http');
const {readFileSync} = require('fs');

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(STATUS_OK, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if (url === '/about') {
        res.writeHead(STATUS_OK, {'content-type': 'text/html'});
        res.write("<h1>about page</h1>");
        res.end();

    } else if (url === '/styles.css') {
        res.writeHead(STATUS_OK, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();

    } else if (url === '/logo.svg') {
        res.writeHead(STATUS_OK, {'content-type': 'image/svg+xml'});
        res.write(homeImage);
        res.end();

    } else if (url === '/browser-app.js') {
        res.writeHead(STATUS_OK, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();

    } else {
        res.writeHead(STATUS_NOT_FOUND, {'content-type': 'text/html'});
        res.write("<h1>page not found</h1>");
        res.end();
    }
});

server.listen(5000);