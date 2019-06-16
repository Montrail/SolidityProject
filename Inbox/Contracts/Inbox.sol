pragma solidity ^0.4.24;


contract Inbox {
    string public message;

    constructor (string memory _initMessage) public {
        message = _initMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
