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

	const exInstance = contract.initContract(exhibition.abi, exhibitionADDRESS)

	let run = async () => {
		try {
			await exInstance.methods
				.booking()
				.send({
					from : sender,
					value : value,
					gas : 2000000,
				})
			return { success: true }
		} catch (error){
			console.log(error)
			return { err: err, success: false }
		}
	}
	let bookingCompletedEvent = async() => {
		await exInstance.events
			.bookingCompleted()
			.once('data', async (event) => {
				console.log(event)
			})
			.on('error', console.error)
	}
	run()
	bookingCompletedEvent()
}


router.post('/', async (req, res) => {
	let result = await booking(req)
	res.send(result)
})

module.exports = router