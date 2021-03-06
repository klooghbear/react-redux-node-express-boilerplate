//environment set up
const confg = require('dotenv').config();
const { server } = require('./server.js');

const { listen } = server
const port = process.env.PORT || 3000;

if (confg) {
  listen(port, () => {
    console.log('WHOOP! Listening on port', port);
  });
}
