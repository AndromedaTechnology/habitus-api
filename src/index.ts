import app from "./app";
import server from "./server";
import { databaseSetup } from "./database";

if (process.env.NODE_ENV !== 'test') {
    databaseSetup();
}

export { app, server };
