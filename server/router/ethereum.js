const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
	let result = await (req)
	res.send(result)
  })
  
  module.exports = router