const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from  Node.js Server!\n');
});

server.listen(3000, () => {
    console.log('Server running at port 3000');
});

// node P1.js