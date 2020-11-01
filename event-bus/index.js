const express = require('express');
const app = express();
// const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
// const cors = require('cors');
const axios = require('axios');

app.use(bodyParser.json());

app.post('/events', (req, res, next) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event); //post service
  axios.post('http://localhost:4001/events', event); //comments service
  axios.post('http://localhost:4002/events', event); //query service

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
