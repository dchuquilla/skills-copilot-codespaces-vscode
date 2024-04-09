// create new web server
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var comments = require('./comments');
var PORT = 3000;

// use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// use static middleware
app.use(express.static(path.join(__dirname, 'public')));

// get comment list
app.get('/comments', function(req, res) {
    comments.getComments(function(err, data) {
        if (err) {
            return res.status(500).send('Server Error');
        }
        res.json(data);
    });
});

// add comment
app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.addComment(comment, function(err) {
        if (err) {
            return res.status(500).send('Server Error');
        }
        res.status(201).send('OK');
    });
});

// start server
app.listen(PORT, function() {
    console.log('Server is running on http://localhost:' + PORT);
});