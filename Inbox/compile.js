const path = require("path"); //for crossplatform
const fs = require("fs"); //file system
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8"); //change to utf8 to UTF-8

//console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1).contracts[':Inbox'];
