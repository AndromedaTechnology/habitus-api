import Koa from "koa";
import Json from "koa-json";
import Cors from "koa2-cors";
import Logger from "koa-logger";
import BodyParser from "koa-bodyparser";

import router from "./modules";

const app = new Koa();
app.use(Json());
app.use(Logger());
app.use(BodyParser());
app.use(router());
app.use(
  Cors({
    origin: "*",
  })
);

export default app;
