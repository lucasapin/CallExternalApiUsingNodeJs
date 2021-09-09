const https = require("https");

_EXTERNAL_URL =
  "https://8822ca43d5557897e478a23b5b8b54eb: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@maison-de-vic.myshopify.com/admin/api/2021-07/orders.json?status=any";

const callExternalApiUsingHttp = (callback) => {
  https
    .get(_EXTERNAL_URL, (resp) => {
      let data = "";

      // A chunk of data has been recieved.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        return callback(data);
        // console.log(JSON.stringify(data));
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

module.exports.callApi = callExternalApiUsingHttp;
