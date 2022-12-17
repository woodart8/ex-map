const express = require('express')
const router = express.Router()

const exhibition = require('../util/booking/build/contracts/Exhibition.json')
const Contract = require('../src/Contract')
const Provider = require('../src/Provider')

const contract = new Contract()
const provider = new Provider()

const web3 = provider.web3

const booking = async(req) => {
	const exhibitionADDRESS = req.body.exhibitionADDRESS
	const sender = req.body.sender
	const value = req.body.value

	let result = { success: false }

	const EventEmitter = exInstance.events.bookingCompleted()

	EventEmitter
	.on('data', (event) => {
		result = { success: true }
		console.log(event)
	})

	const exInstance = contract.initContract(exhibition.abi, exhibitionADDRESS)
	const run = async () => {
		try {
			await exInstance.methods
				.booking()
				.send({
					from : sender,
					value : web3.utils.toWei(String(value), "ether"),
					gas : 2000000
				})
				.then(console.log)
		} catch (error){
			result = { success: false, err: error }
			// console.log(error)
		}
	}

	await run()

	return result
}


router.post('/', async (req, res) => {
	let result = await booking(req)
	res.send(result)
})

module.exports = router