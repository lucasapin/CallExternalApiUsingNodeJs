const request = require("request");

_EXTERNAL_URL =
  "https://8822ca43d5557897e478a23b5b8b54eb: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@maison-de-vic.myshopify.com/admin/api/2021-07/orders.json?status=any";

const callExternalApiUsingRequest = (callback) => {
  request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

module.exports.callApi = callExternalApiUsingRequest;
