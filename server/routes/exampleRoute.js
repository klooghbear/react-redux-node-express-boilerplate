const express = require('express')
const { getExample } = require('../db/example')

const router = express.Router()

router.get('/', (req, res) => {
  return getExample().then(id => {
    console.log(id)
    res.json(id);
  }).catch(error => {
    res.status(500).send({
      message: "ERROR EXAMPLE MESSAGE"
    })
  })
})

module.exports = {
  router
}
