import Joi from "joi";

import * as dotenv from "dotenv";
dotenv.config();

/**
 * Schema
 */

const envSchema = Joi.object()
  .keys({
    // APP
    APP_ENV: Joi.string().optional().default("local"),
    APP_PORT: Joi.number().optional().default(8080),

    // DB
    DB_HOST: Joi.string().optional().default("localhost"),
    DB_PORT: Joi.number().optional().default(27019),
    DB_DATABASE: Joi.string().optional().default("database"),
    DB_USER: Joi.string().optional().default("user"),
    DB_PASSWORD: Joi.string().optional().default(""),
  })
  .unknown()
  .required();

/**
 * Validate
 */

const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

/**
 * Export
 */

export interface IConfig {
  app_env: string;
  app_port: number;
  db_uri: string;
}

const db_uri_additional = `?authSource=admin&w=1`;
const db_uri_auth = `${envVars.DB_USER}:${envVars.DB_PASSWORD}@`;
const db_uri = `mongodb://${db_uri_auth}${envVars.DB_HOST}:${envVars.DB_PORT}/${envVars.DB_DATABASE}${db_uri_additional}`;

const config: IConfig = {
  app_env: envVars.APP_ENV,
  app_port: envVars.APP_PORT,
  db_uri,
};
export default config;
