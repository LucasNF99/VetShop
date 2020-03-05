const env = require('dotenv');

env.config();

module.exports = (e) => {
  return process.env[e];
}