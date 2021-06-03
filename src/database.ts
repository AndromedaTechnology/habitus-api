import mongoose, { Mongoose } from "mongoose";

import config from "./config";

let mongoConnection: Mongoose;

async function databaseSetup(): Promise<Mongoose> {
  mongoose.Promise = global.Promise;
  mongoConnection = await mongoose.connect(config.db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoConnection;
}

mongoose.connection.on("error", console.error);
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB.');
});

export { mongoConnection, databaseSetup };
