const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async');

const HOSTNAME = 'localhost';
const PORT = 1245;
const database = process.argv[2];

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(database)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }
});

app.listen(PORT, HOSTNAME, () => {
  process.stdout.write('...\n');
});

module.exports = app;
