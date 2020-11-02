const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res, next) => {
  const event = req.body;

  events.push(event);

  axios.post('http://localhost:4000/events', event); //to post service
  axios.post('http://localhost:4001/events', event); //to comments service
  axios.post('http://localhost:4002/events', event); //to query service
  axios.post('http://localhost:4003/events', event); //to moderation service

  res.send({ status: 'OK' });
});

app.get('/events', (req, res, next) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Event bus listening on 4005');
});
