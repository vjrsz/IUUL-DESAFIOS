import 'dotenv/config'
import {Options} from "sequelize";
const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const config: Options = {
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  host: DB_HOST,
  dialect: 'postgres',
  logging: false,
  logQueryParameters: false,
}

export = config;