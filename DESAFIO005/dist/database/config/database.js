"use strict";
require("dotenv/config");
const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
const config = {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
    logQueryParameters: false,
};
module.exports = config;
