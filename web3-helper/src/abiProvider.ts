import { AbiItem } from 'web3-utils';

import build from '../contractAbi/InfinityNft.json';

/**
 * Return Smart-Contract's ABI for call reference.
 * @returns {AbiItem} : returns Contract-ABI for ERC-721 contract which is required to be interacted with.
 */
export function getAbi(): AbiItem[] {
    return <AbiItem[]>build.abi;
}