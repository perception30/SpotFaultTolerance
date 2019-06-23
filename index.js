'use strict';

import AwsServerless from './AwsServerless';

const awsServerlessExpress = new AwsServerless();

exports.handler = (event, context) =>
  awsServerlessExpress.getProxy(server, event, context);
