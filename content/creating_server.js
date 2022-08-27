const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Hello World to our Home Page!");
    }
    
    else if (req.url === '/about') {
        res.end("Here is our short history!");
    } else {
    res.end(`<h1>Oops!</h1>
    <p>No page available.</p>
    <a href="/">Back Home</a>
    `)
    };
});

server.listen(5000);