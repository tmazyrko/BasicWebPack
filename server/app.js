const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log('Authentication service started on port 4000');
});

const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "language": "English",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "language": "Danish",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "language": "Italian",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
]

const accessTokenSecret = 'testSecret123';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(authHeader){
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if(err){
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        })
    }
};

app.get('/books', authenticateJWT, (req, res) => {
    res.json(books);
});

app.post('/books', authenticateJWT, (req, res) => {
    const { role } = req.user;

    if(role !== 'admin'){
        return res.sendStatus(403);
    }

    const book = req.body;
    books.push(book);

    res.send('Book added successfully');
});
