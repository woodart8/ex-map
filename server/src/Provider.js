const Web3 = require('web3')

class Provider {
  	constructor() {
    	this.web3 = new Web3(
      		new Web3.providers.WebsocketProvider('ws://13.209.4.223:8545')
    	)
  	}
}

module.exports = Provider