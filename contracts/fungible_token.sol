// SPDX-License-Identifier: MIT
// draft version

pragma solidity >=0.7.0 <0.9.0;

import "../metamarket/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../metamarket/node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract fungible_token is ERC20, Ownable {

    constructor() ERC20("MetaMark", "MetaMark") Ownable() {
        _mint(msg.sender, 10000*(10**18));
    }

    // do not want a fixed supply
    function mint(address to, uint amount) external onlyOwner {
        to = msg.sender;
        _mint(to, amount);
    }

    // allow people to burn their token
    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }

    //when answer is correct, the user earns tokens transferred from the owner 
    function earnTokens(address to, uint amount) external onlyOwner {
        super._transfer(msg.sender, to, amount);
    }
}
