// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

contract SavingRound is VRFConsumerBase {
    address public owner;
    address payable[] public members;
    uint public savingId;
    mapping (uint => address payable) public savingHistory;

    constructor()
        VRFConsumerBase(
            0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B, // VRF coordinator
            0x01BE23585060835E02B77ef475b0Cc51aA1e0709  // LINK token address
        ) {
            keyHash = 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311;
            fee = 0.1 * 10 ** 18;    // 0.1 LINK

            owner = msg.sender;
            lotteryId = 1;
        }

    function getReceiver(uint lottery) public view returns (address payable) {
        return lotteryHistory[lottery];
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getMembers() public view returns (address payable[] memory) {
        return members;
    }

    function enter() public payable {
        require(msg.value > .01 ether);

        // address of player entering lottery
        players.push(payable(msg.sender));
    }

    function pickReceiver() public onlyowner {
    }

    function payReceiver() public {
        uint index = members.length;
        members[index].transfer(address(this).balance);

        savingHistory[savingId] = members[index];
        savingId++;
        
        // reset the state of the contract
        members = new address payable[](0);
    }

    modifier onlyowner() {
      require(msg.sender == owner);
      _;
    }
}