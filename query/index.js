const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = {};

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

  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId } = data;

    const post = posts[postId];
    post.comments.push({ id, content });
  }

  console.log(posts);

  res.send({});
});

app.listen(4002, () => {
  console.log('Query service listening on 4002');
});
