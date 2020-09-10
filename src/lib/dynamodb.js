const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
});


const docClient = new AWS.DynamoDB.DocumentClient();

function get(trackingId) {
  const params = {
    TableName: 'Tracking',
    Key: {
      id: trackingId,
    },
  };

  docClient.get(params, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(JSON.stringify(data));
  });
}

function update(trackingId, events) {
  const params = {
    TableName: 'Tracking',
    Item: {
      id: trackingId,
      events: 'teste',
    },
  };

  docClient.update(params, (err, data) => {
    console.log(err);
    console.log(data);
  });
}

module.exports = {
  get,
  update,
};
