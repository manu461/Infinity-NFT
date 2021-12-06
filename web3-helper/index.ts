import { getAbi } from './src/abiProvider';
import {
    claimItem,
    getBalanceByAddress,
    getOwnerByTokenIndex,
    getTokenURIByTokenIndex,
    getTotalSupply,
} from './src/contractFunctionWrappers';
import { getContract } from './src/web3Connector';
require('dotenv').config()

const contractAddress = <string>process.env.CONTRACT_ADDRESS;
const accountAddress = <string>process.env.ACCOUNT_ADDRESS;
const tokenUri = <string>process.env.TOKEN_URI;

async function main() {
    const abi = getAbi();
    const contract = await getContract(abi, contractAddress);
    const gas = 1500000;
    const gasPrice = '0';
    // Mint NFT 
    const mintedTokenId = await claimItem(contract, accountAddress, gas, gasPrice, tokenUri);
    console.log(`\nNew ERC-721 InfinityNft token minted with tokenId ${mintedTokenId}\n`);

    // Get Total Token Supply
    const tokenSupply = await getTotalSupply(contract);
    console.log(`\nTotal token supply of ERC-721 InfinityNft tokens = ${tokenSupply}\n`);

    // Get owner by TokenId
    const tokenId = tokenSupply;
    const ownerAddress = await getOwnerByTokenIndex(contract, tokenId);
    console.log(`\nOwner of InfinityNft token with tokenId ${tokenId} is ${ownerAddress}\n`);

    // Get Token Balance of a given Address
    const address = ownerAddress;
    const tokenBalance = await getBalanceByAddress(contract, address);
    console.log(`Total ERC-721 InfinityNft token balance of ${address} is = ${tokenBalance} `);

    // Get URI of a token by TokenId
    const tokenUriRes = await getTokenURIByTokenIndex(contract, tokenId);
    console.log(`\nTokenURI of the InfinityNft Token with tokenId ${tokenId} is : ${tokenUriRes}\n`)
}

main();