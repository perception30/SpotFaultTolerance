'use strict';

const AwsServerless = require('./AwsServerless');

const awsServerlessExpress = new AwsServerless();
const server = awsServerlessExpress.server;

exports.handler = (event, context) =>
  awsServerlessExpress.getProxy(server, event, context);
