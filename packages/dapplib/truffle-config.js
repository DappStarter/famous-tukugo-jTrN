require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy riot stick huge guess kangaroo army gesture'; 
let testAccounts = [
"0x0039ab7505f2231a7dd4de48cfd19828030fb26be143ae6fd95dbc466fadf03a",
"0x665be5530739fc8fd17916cdfbafc12e02ed849189abf5aac6e4c0dbb99a28c5",
"0x183072f500a2c96560b1a24163bfadd80e659284e67819b4e7d95829541f5450",
"0x6316edb838fbba204614e0b75cef0edecc1a5a772388cc0acbededd4ca7e199d",
"0xc0fd41d5b6ddf4edb697235612358782beb7c5f238945c12e12e030adbf9377a",
"0x2912777e21741367043100b99556c5dd7d4de411780d941dbd07fd29b8fcd0a0",
"0xe2ffb5854d92cc517691dac1824f2af428dafcadf0bb63166a3f06770a2d38a4",
"0x439cb9a1cb7fe76fde6f14c6947dc5c52e1955c5896a3377d55ba5357456f789",
"0x21a7f1c2c418166a31ce2e05501017f9b10b9d4cff07ff4c98315f53fbf7212f",
"0x3bc535e46c801fba91f7ff46991d2533ace91c9249363d726a8d444dd8dd0755"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

