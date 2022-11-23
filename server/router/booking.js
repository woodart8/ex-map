const express = require('express')
const router = express.Router()
const { pool } = require('../db')

const exhibition = require('../util/booking/build/contracts/Exhibition.json')
const Contract = require('../src/Contract')
const Provider = require('../src/Provider')

const provider = new Provider()
const contract = new Contract()
const web3 = provider.web3

const booking = async(req) => {
	const exhibitionADDRESS = req.body.exhibitionADDRESS
	const sender = req.body.sender
	const value = req.body.value

	let run = async () => {
		// const account = await web3.eth.getAccounts()
		const exInstance = contract.initContract(exhibition.abi, exhibitionADDRESS)
	
		try {
			await exInstance.methods
				.booking()
				.send({
					from : sender,
					value : value,
					gas : 2000000,
				})
				.then(console.log("booking completed"))
			return { success: true }
		} catch (error){
			console.log(error)
			return { err: err, success: false }
		}
		// console.log("run() end")
	}
	run()
}


router.post('/', async (req, res) => {
	let result = await booking(req)
	res.send(result)
})

module.exports = router