import HDWalletProvider from '@truffle/hdwallet-provider';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

/**
 * Prepare and return Contract Object with web3 connection.
 * @param contractAbi : Contract-ABI for ERC-721 contract which is required to be interacted with.
 * @param contractAddress : Address at which ERC-721 contract is deployed.
 * @returns {Contract} Web3 Connection wrapped Contract Object.
 */
export async function getContract(contractAbi: AbiItem[], contractAddress: string): Promise<Contract> {
    const mnemonic = "indoor dish desk flag debris potato excuse depart ticket judge file exit"
    const maticClientUrl = "https://polygon-rpc.com/"
    const provider = new HDWalletProvider(mnemonic, maticClientUrl); // FOR Polygon matic
    // const web3 = new Web3("http://localhost:8545"); // FOR ETH
    const web3 = new Web3(provider); // FOR MATIC
    await web3.eth.getProtocolVersion();
    const contract = new web3.eth.Contract(contractAbi, contractAddress);
    return contract;
}