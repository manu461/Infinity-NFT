import { Contract } from 'web3-eth-contract';

/**
 * Web3 method to call claimItem() function of InfinityNft SmartContract.
 * @param {Contract} contract : Web3 Connection wrapped Contract Object.
 * @param {string} fromAccountAddress : Address of the Account of minter. 
 * @param {number} gas : gas value as number.
 * @param {string} gasPrice : gas price as string.
 * @param {string} tokenUri : TokenUri string which is to be linked with the token.
 * @returns  {Promise<number>} :  returns tokenId of newly minted token.
 */
export async function claimItem(contract: Contract, fromAccountAddress: string, gas: number, gasPrice: string, tokenUri: string): Promise<number> {
    const res = await contract.methods.claimItem(tokenUri).send({
        from: fromAccountAddress, gas: gas,
        gasPrice: gasPrice
    });
    return res.events.Transfer.returnValues.tokenId;
}

/**
 * Web3 method to call totalSupply() function of InfinityNft SmartContract.
 * @param {Contract} contract : Web3 Connection wrapped Contract Object.
 * @returns {Promise<number>} : returns the number of total tokens minted so far.
 */
export async function getTotalSupply(contract: Contract): Promise<number> {
    return await contract.methods.totalSupply().call();
}

/**
 * Web3 method to call ownerOf() function of InfinityNft SmartContract.
 * @param {Contract} contract : Web3 Connection wrapped Contract Object.
 * @param {number} tokenIndex : tokenId string.
 * @returns {Promise<string>} : return the account address of the owner if the token.
 */
export async function getOwnerByTokenIndex(contract: Contract, tokenIndex: number): Promise<string> {
    return await contract.methods.ownerOf(tokenIndex).call();
}

/**
 * Web3 method to call balanceOf() function of InfinityNft SmartContract.
 * @param {Contract} contract : Web3 Connection wrapped Contract Object.
 * @param {string} address : Address of the Account required to be checked. 
 * @returns {Promise<number>} : returns Balance as number.
 */
export async function getBalanceByAddress(contract: Contract, address: string): Promise<number> {
    return await contract.methods.balanceOf(address).call();
}

/**
 * Web3 method to call tokenURI() function of InfinityNft SmartContract.
 * @param {Contract} contract : Web3 Connection wrapped Contract Object.
 * @param {number} tokenIndex : tokenId string.
 * @returns {Promise<number>} : returns TokenUri string.
 */
export async function getTokenURIByTokenIndex(contract: Contract, tokenIndex: number): Promise<string> {
    return await contract.methods.tokenURI(tokenIndex).call();
}