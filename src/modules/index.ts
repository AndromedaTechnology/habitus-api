import combineRouters from "koa-combine-routers";

import rootRouter from "./root/root.module";
import habitRouter from "./habit/habit.module";

const router = combineRouters(rootRouter, habitRouter);

export default router;
