const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()

const { join } = path

const DIST = join(__dirname, "../", "../dist")

app.use(cors())
app.use(express.static(DIST))
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = {
  app
}
