const http = require('http');
const dt = require('./03_modeule.js');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(dt.myDateTime());
  res.end('Hello World\n');
  
  console.log("at port 3000 : "+req);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
