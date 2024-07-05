const AWS = require('aws-sdk');

// Configure the AWS SDK to use the local DynamoDB instance
AWS.config.update({
  region: 'us-west-2', // Replace with your desired region
  endpoint: 'http://localhost:8000', // DynamoDB local endpoint
});

const dynamodb = new AWS.DynamoDB();


  // QUERY
  const querydata = {
    TableName: 'Books',
    KeyConditionExpression: 'id = :id',
    ExpressionAttributeValues: {
      ':id': { N: '1' },
    },
  };
  
  dynamodb.query(querydata, (err, data) => {
    if (err) {
      console.error('Unable to query. Error:', JSON.stringify(err, null, 2));
    } else {
      console.log('Query succeeded:', JSON.stringify(data, null, 2));
    }
  });
