const express = require('express')
const router = express.Router()

const exhibition = require('../util/booking/build/contracts/Exhibition.json')
const Contract = require('../src/Contract')

const contract = new Contract()

const booking = async(req) => {
	const exhibitionADDRESS = req.body.exhibitionADDRESS
	const sender = req.body.sender
	const value = req.body.value

	const exInstance = contract.initContract(exhibition.abi, exhibitionADDRESS)
	const EventEmitter = exInstance.events.bookingCompleted()

	let result = { success: false }

	const run = async () => {
		try {
			await exInstance.methods
				.booking()
				.send({
					from : sender,
					value : value,
					gas : 2000000,
				})
		} catch (error){
			result = { success: false, err: error }
			// console.log(error)
		}
	}

	EventEmitter
	.on('data', (event) => {
		result = { success: true }
		// console.log(event)
	})

	await run()

	return result
}


router.post('/', async (req, res) => {
	let result = await booking(req)
	res.send(result)
})

module.exports = router