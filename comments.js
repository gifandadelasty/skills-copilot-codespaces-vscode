// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// create comments array
var comments = [
    { "id": 1, "author": "Morgan McCircuit", "text": "Great picture!" },
    { "id": 2, "author": "Bending Bender", "text": "Excellent stuff" }
];

// create a function to get the comments
function getComments() {
    return comments;
}

// create a function to add a comment
function addComment(comment) {
    comments.push(comment);
}

// create a route to get the comments
app.get('/comments', function (req, res) {
    res.json(getComments());
});

// create a route to add a comment
app.post('/comments', function (req, res) {
    var comment = {
        id: comments.length + 1,