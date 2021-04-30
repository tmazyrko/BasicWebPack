const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log('Authentication service started on port 4000');
});