const express = require('express');
const app = express();
// const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
// const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res, next) => {
  // res.send(posts);
});

app.post('/events', (req, res, next) => {
  // res.send(posts);
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
