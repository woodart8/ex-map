const express = require('express')
const router = express.Router()
const { pool } = require('../db')

const booking = async(req) => {

}


router.get('/', async (req, res) => {
	let exData = await booking(req)
	res.send(exData)
})

module.exports = router