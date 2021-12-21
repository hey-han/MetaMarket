// SPDX-License-Identifier: MIT
// draft version

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract fungible_token is ERC20, ERC20Detailed {
    address private admin;

    constructor () ERC20("MetaMark", "MetaMark") public {
        _mint(msg.sender, 10000*10**18);
        admin = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == admin, "You do not have access to this function.");
        _;
    }

    // do not want a fixed supply
    function mint(address to, uint amount) external onlyOwner {
        // access control of minting the token
        _mint(to, amount);
    }

    // allow people to burn their token
    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }

    //transfer token to users with correct answer
    function _transfer() internal {
        //check if answer is correct
        super._transfer(admin, msg.sender, 1);
    }
}
