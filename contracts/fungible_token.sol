// SPDX-License-Identifier: MIT
// draft version

pragma solidity >=0.7.0 <0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract fungible_token is ERC20 {
    address public admin;

    constructor() ERC20("MetaMark", "MetaMark") {
        _mint(msg.sender, 10000*10**18);
        admin = msg.sender;
    }

    // do not want a fixed supply
    function mint(address to, uint amount) external {
        // access control of minting the token
        require(msg.sender == admin, "only admin can call this function");
        _mint(to, amount);
    }

    // allow people to burn their token
    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
}
