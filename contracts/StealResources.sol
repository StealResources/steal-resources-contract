// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./libs/ERC20Burnable.sol";
import "./interfaces/IUniswapFactory.sol";
import "./interfaces/IUniswapV2Pair.sol";
import "./interfaces/IWETH.sol";

contract StealResources is ERC20Burnable {

    constructor() ERC20("ORE", "ORE") {}

}