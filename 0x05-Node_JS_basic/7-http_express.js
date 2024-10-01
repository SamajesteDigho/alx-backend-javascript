const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];
const PORT = 1245;
const app = express();

app.listen(PORT, () => {
  process.stdout.write('...');
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database).then(data => {
    res.send(`This is the list of our students${data}`);
  }).catch((err) => {
    res.send(err);
  });
});

module.exports = { app };
