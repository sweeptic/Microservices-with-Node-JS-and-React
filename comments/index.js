const express = require('express');
const axios = require('axios');
const app = express();
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');

const commentsByPostId = {};

app.use(cors());
app.use(bodyParser.json());

app.get('/posts/:id/comments', (req, res, next) => {
  res.send(commentsByPostId[req.params.id] || []);
  // console.log(commentsByPostId);
});

app.post('/posts/:id/comments', async (req, res, next) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({
    id: commentId,
    content,
    status: 'pending',
  });

  commentsByPostId[req.params.id] = comments;

  await axios.post('http://localhost:4005/events', {
    type: 'CommentCreated',
    data: {
      id: commentId,
      content,
      postId: req.params.id,
      status: 'pending',
    },
  }); //query service

  res.status(201).send(comments);
});

app.post('/events', async (req, res, next) => {
  console.log('Received Event', req.body.type);

  const { type, data } = req.body;

  if (type === 'CommentModerated') {
    const { postId, id, status, content } = data;

    const comments = commentsByPostId[postId];

    const comment = comments.find(comment => comment.id === id);

    comment.status = status;

    await axios.post('http://localhost:4005/events', {
      type: 'CommentUpdated',
      data: {
        id,
        status,
        postId,
        content,
      },
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log('Comments service listening on 4001');
});
