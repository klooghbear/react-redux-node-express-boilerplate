const express = require('express');
const path = require('path');
const { router } = require('./routes/router.js')

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, './public')));

server.use('/', router)

module.exports = {
  server
}
