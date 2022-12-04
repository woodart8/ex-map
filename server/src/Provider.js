const Web3 = require('web3')

class Provider {
  	constructor() {
    	this.web3 = new Web3(
      		new Web3.providers.WebsocketProvider('ws://54.180.109.101:8545'),
    	)
  	}
}

module.exports = Provider