const express = require('express');
const app = express();
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');

const posts = {};

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res, next) => {
  res.send(posts);
});

app.post('/posts', (req, res, next) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  // 435sfd43: {id: "43tffsdf", title: "post"}

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
