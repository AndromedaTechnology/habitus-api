import combineRouters from "koa-combine-routers";

import rootRouter from "./root/root.module";
import authRouter from "./auth/auth.module";
import habitRouter from "./habit/habit.module";

const router = combineRouters(
    rootRouter,
    authRouter,
    habitRouter
);

export default router;
