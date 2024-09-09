// Create web server
// Load the express library
const express = require('express');

// Create an instance of the express server
const app = express();

// Load the body-parser library
const bodyParser = require('body-parser');

// Load the file system library
const fs = require('fs');

// Load the path library
const path = require('path');

// Load the comments.json file
const commentsPath = path.join(__dirname, 'comments.json');

// Load the comments.json file
const comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));

// Parse the request body as JSON
app.use(bodyParser.json());

// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route to get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  res.json(comment);
});

// Create a route to create a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  };

  comments.push(comment);

  fs.writeFileSync(commentsPath, JSON.stringify(comments, null, 2));

  res.json(comment);
});

//