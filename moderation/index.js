const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// app.use(cors());
const app = express();
app.use(bodyParser.json());

// app.get('/posts', (req, res, next) => {
//   res.send(posts);
// });

app.post('/events', async (req, res, next) => {
  // const id = randomBytes(4).toString('hex');
  // const { title } = req.body;
  //   // 435sfd43: {id: "43tffsdf", title: "post"}
  //   posts[id] = {
  //     id,
  //     title,
  //   };
  //   await axios.post('http://localhost:4005/events', {
  //     type: 'PostCreated',
  //     data: {
  //       id,
  //       title,
  //     },
  //   });
  //   res.status(201).send(posts[id]);
  // });
  // app.post('/events', (req, res, next) => {
  //   console.log('Received Event', req.body.type);
  //   res.send({});
});

app.listen(4003, () => {
  console.log('Moderation service listening on 4003');
});
