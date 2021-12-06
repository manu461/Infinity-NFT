import 'reflect-metadata';

import { Container } from 'inversify';

import { ITokenImageFetcherService } from '../service/ITokenImageFetcherService';
import TokenImageFetcherService from '../service/TokenImageFetcherService';
import HttpClient from '../utils/HttpClient';
import TYPES from './types';

const container = new Container();

container.bind<ITokenImageFetcherService>(TYPES.ITokenImageFetcherService).to(TokenImageFetcherService);
container.bind<HttpClient>(TYPES.HttpClient).to(HttpClient);
export default container;
