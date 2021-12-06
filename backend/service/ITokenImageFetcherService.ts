
/**
 * ITokenImageFetcherService is the Interface for TokenImageFetcherService.
 */
export interface ITokenImageFetcherService {

  /**
   * HealthCheck function.
   * @returns {Promise<string>} : service's life status in string.
   */

  healthCheck(): Promise<string>;

  /**
   * Fetch image for provided tokenUri.
   * @param {string} tokenUri : URI for InfinityNFT token.
   * @returns {Promise<string>}: returns Base64 image string.
   */
  fetchImage(tokenUri: string): Promise<string>;
}
