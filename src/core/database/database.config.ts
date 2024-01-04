import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';
import { Dialect } from 'sequelize';
import * as path from 'path';

// For Production
// dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// For Devlopment
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export const databaseConfig: IDatabaseConfig = {
  development: {
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    dialect: process.env.DB_DIALECT as Dialect,
  },
  test: {
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASS,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
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
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT as Dialect,
  },
};
