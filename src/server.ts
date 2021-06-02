import { Server } from "http";

import app from "./app";
import config from "./config";

let server: Server | undefined = undefined;
if (process.env.NODE_ENV !== 'test') {
  server = app
  .listen(config.app_port, () => {
    console.log(`Server started on port ${config.app_port}.`);
  })
  .on("error", (error) => {
    console.error(error);
  });
}

export default server;
