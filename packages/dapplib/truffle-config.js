require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth remain company gesture crew flush genuine'; 
let testAccounts = [
"0xf642f553c08ec89ddcf8efa5160285af466a44c99342884413d4c105cea8ca0d",
"0x8b9d8ada432453bfbe38ec6938e160c50982957982e95cbe3d4956ba9142a323",
"0x2c3e6d9f2184b7bdf4e409d8966569847f7a575ae9e04a09f938ee06e75d2624",
"0x550056d7f5df1f022a9b3af0973f97dcfdfefd25d8c7c709de851dbf74d5d4e8",
"0xf93a4575945194da82d31a0cc223a81b06a099405b08edad12e9b7da580fb2a6",
"0xd1e34832a2a5fc78ec7cc822a12554362c230623d185bbbcd34cc40740d63f72",
"0xa5330b93de705d44ed54a183c5599433b6e17fec15b34af9fd1453ed509d3abc",
"0x0f0fc056eec6b3975e7d7ad1bb181f7996ec3bfa106d823241a4cbdad088eeb4",
"0x05d2bd278aea1d4f39d43a19c1cddda528bb79377f5496d259f0b5ac84869fa6",
"0x6cbdd64621105963c629941f7ae7a67af64b7c773719e07bbc732db472909624"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


