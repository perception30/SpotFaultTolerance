module.exports = {
  DB_SERVER: process.env.NODE_ENV === 'test'
    ? 'http://localhost:4569'
    : process.env.DYNAMODB_SERVER,
  AWS_REGION: 'us-west-2'
};
