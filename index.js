'use strict';

import AwsServerless from './AwsServerless';

const awsServerlessExpress = new AwsServerless();
const server = awsServerlessExpress.server;

exports.handler = (event, context) =>
  awsServerlessExpress.getProxy(server, event, context);
