// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract Counter {
    uint private count;

    constructor() {
        count = 0;
    }

    function countAdd() public {
        count++;
    }

    function countGet() public view returns (uint) {
        return count;
    }
}
