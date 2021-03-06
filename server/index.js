//environment set up
const confg = require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 3000;

if (confg) {
  try {
    server.listen(port, function () {
      //eslint-disable-next-line no-console
      console.log('WHOOP! Listening on port', port);
    });
  } catch (error) {
    console.log(error)
  }
}
