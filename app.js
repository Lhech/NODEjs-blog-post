const express = require('express');
const app = express()

const postRoutes = require('./routes/postroutes');

app.use(express.json());

app.use('/posts', postRoutes)


module.exports = app