import mongoose, { Mongoose } from "mongoose";

import config from "./config";

let mongoConnection: Mongoose;

async function databaseSetup(): Promise<Mongoose> {
  mongoose.Promise = global.Promise;
  mongoConnection = await mongoose.connect(config.db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoConnection.connection.on("error", console.error);
  return mongoConnection;
}

export { mongoConnection, databaseSetup };
