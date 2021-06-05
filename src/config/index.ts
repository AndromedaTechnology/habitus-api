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
    APP_PORT: Joi.number().optional(),
    APP_SECRET: Joi.string().optional().default("secret"),
    API_PREFIX: Joi.string().optional().default("/api"),

    // Admin
    ADMIN_PASSWORD: Joi.string().optional().default("secret"),

    // DB
    // If available, DB_URI is preferred over other db vars
    DB_URI: Joi.string().optional(),
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
  app_secret: string;
  api_prefix: string;
  admin_password: string;
  db_uri: string;
}

const db_uri_additional = `?authSource=admin&w=1`;
const db_uri_auth = `${envVars.DB_USER}:${envVars.DB_PASSWORD}@`;
const db_uri = `mongodb://${db_uri_auth}${envVars.DB_HOST}:${envVars.DB_PORT}/${envVars.DB_DATABASE}${db_uri_additional}`;

const config: IConfig = {
  app_env: envVars.APP_ENV,
  app_port: process.env.PORT || envVars.APP_PORT || 8080,
  app_secret: envVars.APP_SECRET,
  api_prefix: envVars.API_PREFIX,
  admin_password: envVars.ADMIN_PASSWORD,
  db_uri: envVars.DB_URI ?? db_uri, // If available, env.DB_URI is preferred over other db vars
};
export default config;
