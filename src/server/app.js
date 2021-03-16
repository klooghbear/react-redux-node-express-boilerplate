const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()

const { join } = path
const { router } = require("./routes/router.js")

const DIST = join(__dirname, "../", "../dist")
const PARTIAL = join(DIST, "index.html")

app.use(cors())

app.use(express.static(DIST))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", router)

app.get("/", (req, res) => {
  res.sendFile(PARTIAL)
})

module.exports = {
  app
}
