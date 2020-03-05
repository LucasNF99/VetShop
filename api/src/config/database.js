import env from './dotenv';

const host = env('DB_HOST');
const username = env('DB_USER');
const password = env('DB_PASSWORD');
const database = env('DB_DATABASE');

module.exports = {
  dialect: 'postgres',
  host,
  username,
  password,
  database,
}