const connection = require('./connection');

const getExample = (db = connection) => {
  return db('some_table').select();
}

module.exports = {
  getExample,
};
