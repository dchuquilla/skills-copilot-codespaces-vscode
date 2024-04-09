// create new web server
// set up the server to listen on port 3000
// create a route for GET /comments that returns all the comments
// create a route for GET /comments/:id that returns a specific comment
// create a route for POST /comments that adds a new comment
// create a route for PUT /comments/:id that modifies a comment
// create a route for DELETE /comments/:id that deletes a comment
// create a route for GET /comments/:id/replies that returns all the replies for a specific comment
// create a route for POST /comments/:id/replies that adds a new reply to a specific comment
// create a route for PUT /comments/:id/replies/:replyId that modifies a reply
// create a route for DELETE /comments/:id/replies/:replyId that deletes a reply

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use(bodyParser.json());

let comments = [
  {
    id: 1,
    text: 'Comment 1',
    replies: [
      {
        id: 1,
        text: 'Reply 1'
      },
      {
        id: 2,
        text: 'Reply 2'
      }
    ]
  },
  {
    id: 2,
    text: 'Comment 2',
    replies: [
      {
        id: 1,
        text: 'Reply 1'
      }
    ]
  }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
    return;
  }
  res.json(comment);
});

app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    text: req.body.text
  };
  comments.push(comment);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
    return;
  }
  res.json(comment);
});