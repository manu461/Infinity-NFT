import * as express from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils';

import TYPES from '../container/types';
import { ITokenImageFetcherService } from '../service/ITokenImageFetcherService';

const API_VERSION = 'v1';
@controller(`/${API_VERSION}/fetch`)
export default class TokenImageFetcherController {
  private response: { apiVersion: string; data: any; error: any } = {
    apiVersion: API_VERSION,
    data: {},
    error: {},
  };
  constructor(
    @inject(TYPES.ITokenImageFetcherService)
    private tokenImageFetcherService: ITokenImageFetcherService
  ) { }

  @httpGet('/healthCheck')
  private async healthCheck(
    @request() req: express.Request,
    @response() res: express.Response
  ): Promise<express.Response> {
    try {
      this.response.data = await this.tokenImageFetcherService.healthCheck();
      return res.status(200).send(this.response);
    } catch (error) {
      this.response.error = error.message;
      return res.status(500).send(this.response);
    }
  }

  @httpPost('/image')
  private async fetchImage(
    @request() req: express.Request,
    @response() res: express.Response
  ): Promise<express.Response> {
    try {
      const tokenUri = req.body.tokenUri;
      this.response.data = await this.tokenImageFetcherService.fetchImage(tokenUri);
      return res.status(200).send(this.response);
    } catch (error) {
      this.response.error = error.message;
      return res.status(500).send(this.response);
    }
  }
}
