// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 < 0.9.0;

import "./Exhibition.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/security/Pausable.sol";

contract ExhibitionFactory is Ownable, Pausable {

	event ExhibitionCreated(address indexed _creator, address _exhibition, uint256 _depositedValue);

	//전시회 만들기
	function createExhibition(uint256 _minimum) external payable {
		Exhibition exhibition = new Exhibition{value: msg.value}(msg.sender, _minimum);
		emit ExhibitionCreated(msg.sender, address(exhibition), msg.value);
	}

}