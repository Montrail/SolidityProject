const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const OPTIONS = {defaultBlock: 'latest', transactionConfirmationBlocks: 1, transactionBlockTimeout: 5};
const web3 = new Web3(provider, null, OPTIONS);
const {interface, bytecode} = require('../compile');
const INITIAL_STRING = 'Hi there!';

let accounts;
let inbox;


beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // deploy contracts
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INITIAL_STRING] })
    .send({ from: accounts [0], gas: 1000000 });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
  });
});
