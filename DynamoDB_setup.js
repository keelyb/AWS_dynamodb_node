const AWS = require('aws-sdk');

// Configure the AWS SDK to use the local DynamoDB instance
AWS.config.update({
  region: 'us-west-2', // Replace with your desired region
  endpoint: 'http://localhost:8000', // DynamoDB local endpoint
});

const dynamodb = new AWS.DynamoDB();

// SETUP TABLES
const params = {
    TableName: 'Books',
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' }, // Partition key
    ],
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'N' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };
  
  dynamodb.createTable(params, (err, data) => {
    if (err) {
      console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
    }
  });

// INSERT DATA
  const insertdata = {
    TableName: 'Books',
    Item: {
      id: { N: '1' },
      title: { S: 'The Great Gatsby' },
      author: { S: 'F. Scott Fitzgerald' },
      pages: { N: '180' },
    },
  };
  
  dynamodb.putItem(insertdata, (err, data) => {
    if (err) {
      console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      console.log('Added item:', JSON.stringify(data, null, 2));
    }
  });


