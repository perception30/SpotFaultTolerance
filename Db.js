'use strict';
const config = require('./config');

const AWS = require('aws-sdk');

const params = {
  TableName: 'SpotFaultTolerance',
  KeySchema: [
    { AttributeName: 'workUnit', KeyType: 'HASH' },  //Partition key
    { AttributeName: 'title', KeyType: 'RANGE' }  //Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: 'year', AttributeType: 'N' },
    { AttributeName: 'title', AttributeType: 'S' }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

AWS.config.update({
  region: config.AWS_REGION,
  endpoint: config.DB_SERVER
});

class Db {
  constructor () {
    this.db = new AWS.DynamoDB();
  }

  createTable () {
    this.db.createTable(params, function (err, data) {
      if (err) {
        console.error('Unable to create table. Error JSON:',
          JSON.stringify(err, null, 2));
      } else {
        console.log('Created table. Table description JSON:',
          JSON.stringify(data, null, 2));
      }
    });
  }

  getData () {
    this.db.getItem({
      params: {
        TableName: ''
      }
    });
  }

}

const db = new Db();
db.createTable();
