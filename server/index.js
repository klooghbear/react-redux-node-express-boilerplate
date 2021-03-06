const { server } = require('./server.js');
const port = process.env.PORT || 3000;
const promise = server.listen(port, () => {
  console.log('WHOOP! Listening on port', port);
})

if (require('dotenv').config()) {
  return promise
}
