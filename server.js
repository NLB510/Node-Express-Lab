const express = require('express');

const postRouter = require('./posts/postRouter')

const server = express();

server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`
  <h2> Hello from The API</h2>
  `)
})


module.exports = server;