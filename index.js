'use strict';

const AwsServerless = require('./AwsServerless');

const server = AwsServerless.server;

exports.handler = (event, context) =>
  AwsServerless.getProxy(server, event, context);
