
const AWS = require('aws-sdk');

const config = require('./aws.configure.js');


(async () => {
  try {
    AWS.config.setPromisesDependency();
    AWS.config.update({
      accessKeyId: config.aws.accessKey,
      secretAccessKey: config.aws.secretKey,
      region: config.aws.region
    });

    const s3 = new AWS.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'korean-files'
    }).promise();
    console.log(response);
  } catch (err) {
    console.log('aws error: ', err);
  }
})();
