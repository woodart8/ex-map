const Provider = require('./Provider')
const provider = new Provider()

class Contract {
  	constructor() {
    	this.web3 = provider.web3
  	}

  	initContract(ABI, ADDRESS) {
    	const instance = new this.web3.eth.Contract(ABI, ADDRESS)
    	return instance
  	}
	
}

module.exports = Contract