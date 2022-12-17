const express = require('express')
const router = express.Router()
const { pool } = require('../db')

const Provider = require('../src/Provider')
const provider = new Provider()
const web3 = provider.web3

const getAccounts = async(req) => {
	const user_name = req.body.username
	const query = `SELECT user_addr FROM user WHERE user_name = ?`
	try{
		const connection = await pool.getConnection(async conn => conn)

		try {
			const [rows] = await connection.query(query, user_name)
			connection.release()
			let balance = 0

			await web3.eth.getBalance(rows[0].user_addr)
			.then((data) =>{
				balance = data
			})

			return {addr: rows[0].user_addr, balance: balance, success: true}
		} catch(err){
			return { err: err, success: false }
		}
	} catch(err){
		console.log('DB error')
    	return false
	}
}

router.get('/', async (req, res) => {
	let result = await getAccounts(req)
	res.send(result)
	})
  
  module.exports = router