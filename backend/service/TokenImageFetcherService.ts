import { inject, injectable } from 'inversify';

import TYPES from '../container/types';
import HttpClient from '../utils/HttpClient';
import { ITokenImageFetcherService } from './ITokenImageFetcherService';

/**
 * TokenImageFetcherService is the concrete implementation of ITokenImageFetcherService interface.
 */
@injectable()
export default class TokenImageFetcherService implements ITokenImageFetcherService {
  constructor(
    @inject(TYPES.HttpClient)
    private httpClient: HttpClient,
  ) { }

  /**
   * HealthCheck function.
   * @returns {Promise<string>} : service's life status in string.
   */
  public async healthCheck(): Promise<string> {
    return 'I am Alive!';
  }


  /**
   * Fetch image for provided tokenUri.
   * @param {string} tokenUri : URI for InfinityNFT token.
   * @returns {Promise<string>}: returns Base64 image string.
   */
  fetchImage(tokenUri: string): Promise<string> {
    return this.httpClient.fetchImage(tokenUri);
  }
}