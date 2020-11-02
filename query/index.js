const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = {};

const axios = require('axios');

const handleEvent = (type, event) => {
  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find(comment => comment.id === id);

    comment.status = status;
    comment.content = content;
  }
};

//QUICK EXAMPLE
const postsExample = {
  fdsdf23: {
    id: 'f33f',
    title: 'post title',
    comments: [{ id: '34f23', content: 'comment' }],
  },
  fdsdf23: {
    id: 'f33f',
    title: 'post title',
    comments: [{ id: '34f23', content: 'comment' }],
  },
};

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res, next) => {
  res.send(posts);
});

app.post('/events', (req, res, next) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({});
});

app.listen(4002, async () => {
  console.log('Query service listening on 4002');

  const res = await axios.get('http://localhost:4005/events');

  for (let event of res.data) {
    console.log('Processing event:', event.type);

    handleEvent(event.type, event.data);
  }
});
