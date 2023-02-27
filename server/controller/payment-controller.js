import paytmchecksum from "../paytm/PaytmChecksum.js";
import { paytmParams, paytmMerchantkey } from "../index.js";
import formidable from "formidable";
import https from "https";

export const addPaymentGateway = async (request, response) => {
  const paytmCheckSum = await paytmchecksum.generateSignature(
    paytmParams,
    paytmMerchantkey
  );
  try {
    const params = {
      ...paytmParams,
      CHECKSUMHASH: paytmCheckSum,
    };
    response.json(params);
  } catch (error) {
    console.log(error);
  }
};

export const paytmResponse = async (request, response) => {
  // validating checksum
  const form = new formidable.IncomingForm();
  const paytmCheckSum = request.body.CHECKSUMHASH;
  delete request.body.CHECKSUMHASH;

  const isVeriySignature = paytmchecksum.verifySignature(
    request.body,
    paytmMerchantkey,
    paytmCheckSum
  );
  if (isVeriySignature) {
    const paytmParams = {};
    paytmParams["MID"] = request.body.MID;
    paytmParams["ORDERID"] = request.body.ORDERID;

    paytmchecksum
      .generateSignature(paytmParams, paytmMerchantkey)
      .then(function (checksum) {
        paytmParams["CHECKSUMHASH"] = checksum;

        const post_data = JSON.stringify(paytmParams);

        const options = {
          hostname: "securegw-stage.paytm.in",
          port: 443,
          path: "/order/status",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        let res = "";
        let post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            res += chunk;
          });
          post_res.on("end", function () {
            let result = JSON.parse(res);
            console.log(result);
            response.redirect("http://localhost:3000/");
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
  } else {
    console.log("Checksum mismatch");
  }
};
