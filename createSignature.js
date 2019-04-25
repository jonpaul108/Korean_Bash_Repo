const config = require('./aws.configure.js');

var access_key = config.aws.accessKey;
var secret_key = config.aws.secretKey;
var region = config.aws.regionk;
var url = 'korean-files.s3.amazonaws.com';
var myService = 's3';
var myMethod = 'GET';
var myPath = '/';

var amzDate = getAmzDate(new Date().toISOString());
var authDate = amzDate.split("T")[0];

function getAmzDate(dateStr) {
  var chars = [":","-"];
  for (var i=0;i<chars.length;i++) {
    while (dateStr.indexOf(chars[i]) != -1) {
      dateStr = dateStr.replace(chars[i],"");
    }
  }
  dateStr = dateStr.split(".")[0] + "Z";
  return dateStr;
}

var payload = '';
var hashedPayload = crypto.SHA256(payload).toString();

var canonicalReq =  myMethod + '\n' +
                    myPath + '\n' +
                    '\n' +
                    'host:' + url + '\n' +
                    'x-amz-content-sha256:' + hashedPayload + '\n' +
                    'x-amz-date:' + amzDate + '\n' +
                    '\n' +
                    'host;x-amz-content-sha256;x-amz-date' + '\n' +
                    hashedPayload;

var canonicalReqHash = crypto.SHA256(canonicalReq).toString();

var stringToSign =  'AWS4-HMAC-SHA256\n' +
                    amzDate + '\n' +
                    authDate+'/'+region+'/'+myService+'/aws4_request\n'+
                    canonicalReqHash;

function getSignatureKey(Crypto, key, dateStamp, regionName, serviceName) {
                        var kDate = Crypto.HmacSHA256(dateStamp, "AWS4" + key);
                        var kRegion = Crypto.HmacSHA256(regionName, kDate);
                        var kService = Crypto.HmacSHA256(serviceName, kRegion);
                        var kSigning = Crypto.HmacSHA256("aws4_request", kService);
                        return kSigning;
                    }

                    // get our Signing Key
var signingKey = getSignatureKey(crypto, secret_key, authDate, region, myService);

var authenticationKey =
