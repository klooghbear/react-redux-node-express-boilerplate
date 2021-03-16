const config = require("dotenv").config()

const { app } = require("./app.js")
const port = process.env.PORT || 3000

const promise = app.listen(port, () => {
  console.log(`=> Listening on port ${port}`)
})

if (config) {
  () => {
    return promise
  }
}
