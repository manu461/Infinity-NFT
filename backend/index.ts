import 'reflect-metadata';
import './controller/TokenImageFetcherController';

import * as bodyParser from 'body-parser';
import { blue, cyan, green } from 'colors/safe';
import { InversifyExpressServer } from 'inversify-express-utils';

import container from './container/ioc-container';

require('dotenv').config();

const port = process.env.SERVER_PORT;

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
});
const app = server.build();
app.listen(port, () => {
  console.log(`${blue('Server ')}${cyan('started on port :')} ${green(port!.toString())}`);
});
exports = app;
module.exports = app;
