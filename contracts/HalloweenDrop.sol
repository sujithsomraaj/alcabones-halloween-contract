// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

/// @title HalloweenDrop
/// @author twitter.com/sujithsomraaj
/// @dev for users to claim their halloween drop

contract HalloweenDrop {
    /// @dev maps the tokenID to FamilyID
    mapping(uint256 => uint256) private family;

    constructor() {}

    function addFamilyTokenIds(uint256 data, uint256 familyId)
        public
        virtual
        returns (bool)
    {
        family[data] = familyId;
        return true;
    }
}
