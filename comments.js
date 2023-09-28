// Create web server  that can listen to request from client
// and send back response
// 1. import http module
const http = require('http');
// 2. create server
const server = http.createServer((req, res) => {
    // 3. send back response
    res.end('Hello from the server');
});
// 4. start the server
server.listen(3000, '' , () => {});