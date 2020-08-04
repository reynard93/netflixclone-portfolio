// functions that interact with the blockchain

// import algo js sdk
const algosdk = require('algosdk');

const server = 'https://testnet-algorand.api.purestake.io/ps1';
const port = '';
const token = { 'X-API-Key': 'q6SxddUqMjGfyRwofxRp69DS98gsfmf2bCv8H9qd' };

let algodclient = new algosdk.Algod(token, server, port);

function generate
