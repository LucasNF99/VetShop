const env = require('./dotenv');

const host = env('DB_HOST');
const username = env('DB_USER');
const password = env('DB_PASSWORD');
const database = env('DB_DATABASE');
const port = env('DB_PORT');

module.exports = {
  dialect: 'postgres',
  host,
  port,
  username,
  password,
  database,
}