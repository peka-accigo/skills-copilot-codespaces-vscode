//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Import the comments.json file
const comments = require('./comments.json');

//Create a GET route for /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//Create a GET route for /comments/:id
app.get('/comments/:id', (req, res) => {
    //Get the id parameter from the request
    const id = req.params.id;
    //Find the comment in the array that has the id given
    const comment = comments.find(comment => comment.id === id);
    //If no comment is found, return a 404 error
    if (!comment) {
        res.status(404).send("Comment not found");
    }
    //Return the comment object
    res.json(comment);
});

//Start the server
app.listen(port, () => console.log(`App listening on port ${port}`));