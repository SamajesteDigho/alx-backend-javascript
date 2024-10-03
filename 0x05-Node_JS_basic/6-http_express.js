const express = require('express');

const PORT = 1245;
const app = express();

app.listen(PORT, () => {
  process.stdout.write('...');
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

module.exports = app;
