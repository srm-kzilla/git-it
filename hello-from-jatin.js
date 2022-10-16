const http = require('http'); // Loads the http module

http
  .createServer((request, response) => {
    response.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    response.write('Hello world!\n');
    response.end();
  })
  .listen(1337);

console.log('listening on http://localhost:1337');
