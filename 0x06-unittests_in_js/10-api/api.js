const express = require('express');

const app = express();
const PORT = 7865;

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/card/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_, res) => {
  res.status(200).send({
    payment_methods: { credit_cards: true, paypal: false }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

module.exports = app;
