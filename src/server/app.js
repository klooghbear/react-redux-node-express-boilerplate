const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()

const { join } = path

const DIST = join(__dirname, "../", "../dist")

app.use(cors())
app.use(express.static(DIST))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/favicon.ico", (req, res) => res.status(204))

module.exports = {
  app
}
