const NodeGeocoder = require("node-geocoder");
const path = require("path");
const dotenv = require("dotenv");
// config files
dotenv.config({
  path: path.resolve(".env"),
});

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

const geocoder = NodeGeocoder(options);
module.exports = geocoder;
