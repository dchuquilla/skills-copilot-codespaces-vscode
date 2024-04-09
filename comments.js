// Create web server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var comments = [];

app.use(bodyParser.json());

app.get('/comments', function(req, res) {
  res.send(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body.comment);
  res.send('Comment added');
});

app.listen(3000, function() {
  console.log('Server running on port 3000');
});