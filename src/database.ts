import mongoose, { Mongoose } from "mongoose";

import config from "./config";

let mongoConnection: Mongoose;

/**
 * Database Setup
 *
 * @param {string|undefined} uri Used for testing
 *
 * @returns {Promise<Mongoose>}
 */
async function databaseSetup(uri?: string): Promise<Mongoose> {
  mongoose.Promise = global.Promise;
  mongoConnection = await mongoose.connect(uri ?? config.db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  return mongoConnection;
}

mongoose.connection.on("error", console.error);
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB.');
});

export { mongoConnection, databaseSetup };
