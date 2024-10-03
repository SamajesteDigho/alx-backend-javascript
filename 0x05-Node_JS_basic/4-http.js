const { createServer } = require('node:http');

const HOSTNAME = 'localhost';
const PORT = '1245';

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, HOSTNAME, () => {
  process.stdout.write('...');
});

module.exports = app;
