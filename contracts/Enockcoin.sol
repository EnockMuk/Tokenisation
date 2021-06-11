// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Enockcoin is ERC20 {

    
        constructor(uint256 _monSupply) ERC20 ("ENOCKCOIN", "ENCK"){

            _mint(msg.sender, _monSupply*10**decimals());
        }


}