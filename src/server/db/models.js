const connection = require("./connection")

const getter = (db = connection) => {
  return db("some_table").select()
}

module.exports = {
  getter
}
