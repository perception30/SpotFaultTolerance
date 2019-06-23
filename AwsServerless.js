const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

export default class AwsServerless {
  constructor () {
    this.proxy = awsServerlessExpress.proxy;
    this.createdServer = awsServerlessExpress.createServer(app);
  }

  getProxy () {
    return this.proxy;
  }

  get server () {
    return this.createdServer;
  }
}

module.exports = new AwsServerless();
