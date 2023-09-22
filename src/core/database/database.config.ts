import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';
import { Dialect } from 'sequelize';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  development: {
    username: "root",
    password: "Root8@12345",
    database: "portialab",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT as Dialect,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT as Dialect,
  },
  staging: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT as Dialect,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as Dialect,
  },
};
