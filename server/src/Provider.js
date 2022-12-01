const Web3 = require('web3')

class Provider {
  	constructor() {
    	this.web3 = new Web3(
      		new Web3.providers.WebsocketProvider('ws://localhost:8545'),
    	)
  	}
}

module.exports = Provider