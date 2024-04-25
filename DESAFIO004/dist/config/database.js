"use strict";
require("dotenv");
const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
const config = {
    username: DB_USER,
    password: DB_PASS,
    database: DB_HOST,
    host: DB_HOST,
    dialect: 'postgres'
};
module.exports = config;
