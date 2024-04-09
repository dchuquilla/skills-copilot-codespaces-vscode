// create new web server
const express = require('express');
const app = express();

// create a server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// create a route
app.get('/', (req, res) => {
  res.send('Welcome to my blog');
});

// create a route
app.get('/comments', (req, res) => {
  res.send('Comments will be here');
});

// create a route
app.get('/about', (req, res) => {
  res.send('About me');
});
// Path: comments.js
// create new web server
const express = require('express');

// create a server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// create a route
app.get('/', (req, res) => {
  res.send('Welcome to my blog');
});

// create a route
app.get('/comments', (req, res) => {
  res.send('Comments will be here');
});

// create a route
app.get('/about', (req, res) => {
  res.send('About me');
});

// create a route
app.get('/blog', (req, res) => {
  res.send('Blog page');
});
// Path: comments.js
// create new web server
const express = require('express');

// create a server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// create a route
app.get('/', (req, res) => {
  res.send('Welcome to my blog');
});

// create a route
app.get('/comments', (req, res) => {
  res.send('Comments will be here');
});

// create a route
app.get('/about', (req, res) => {
  res.send('About me');
});

// create a route
app.get('/blog', (req, res) => {
  res.send('Blog page');
});

// create a route
app.get('/contact', (req, res) => {
  res.send('Contact me');
});