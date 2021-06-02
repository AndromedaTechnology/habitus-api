import app from "./app";
import server from "./server";
import { databaseSetup } from "./database";

databaseSetup();

export { app, server };
