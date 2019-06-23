const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const server = awsServerlessExpress.createServer(app);

export default class AwsServerless {
  constructor () {
    this.proxy = awsServerlessExpress.proxy;
  }

  getProxy () {
    return this.proxy;
  }
}

module.exports = new AwsServerless();
