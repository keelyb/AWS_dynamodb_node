# AWS_dynamodb_node
# INTRO

- This is an example of a AWS DynamoDB instance running locally. Once the DynamoDB local is downloaded and installed, along with npm and node the DB can be setup and populated with data and subsequently queried.

# SETUP

- Download and Install the dynamoDB local
  https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html

- unzip the download file into a path of your choosing.

- Run the AWS CLI to setup access and region: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.CLI.html

```
// AWS Access Key ID: "fakeMyKeyId"
// AWS Secret Access Key: "fakeSecretAccessKey"
// Default Region Name: "fakeRegion"
```

- Configure AWS as needed:

```
aws configure
```

- Setup and Install node package

```
npm init -y
npm install aws-sdk
```

# RUN DYNAMODB

```
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

# RUN AWS DYNAMODB CLI

- Run list-tables to validate dynamodb is running locally:

```
aws dynamodb list-tables --endpoint-url http://localhost:8000
```

- RESULTS

```
{
    "TableNames": []
}
```

# RUN DynamoDB_setup

- Setup and create DB

```
node DynamoDB_setup.js

Added item: {}
Query succeeded: {
  "Items": [
    {
      "id": {
        "N": "1"
      },
      "pages": {
        "N": "180"
      },
      "title": {
        "S": "The Great Gatsby"
      },
      "author": {
        "S": "F. Scott Fitzgerald"
      }
    }
  ],
  "Count": 1,
  "ScannedCount": 1
}

```

# Run DynamoDB_query

- query DB

```
node DynamoDB_setup.js

Query succeeded: {
  "Items": [
    {
      "id": {
        "N": "1"
      },
      "pages": {
        "N": "180"
      },
      "title": {
        "S": "The Great Gatsby"
      },
      "author": {
        "S": "F. Scott Fitzgerald"
      }
    }
  ],
  "Count": 1,
  "ScannedCount": 1
}
```

