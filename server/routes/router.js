const express = require('express')
const { getter } = require('../db/models.js')

const router = express.Router()

router.get('/', (req, res) => {
  getter().then((id) => {
    res.json(id);
  }).catch((error) => {
    res.status(500).send({
      message: "ERROR EXAMPLE MESSAGE"
    })
  })
})

module.exports = {
  router
}
