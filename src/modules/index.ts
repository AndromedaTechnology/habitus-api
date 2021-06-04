import combineRouters from "koa-combine-routers";

import rootRouter from "./root/root.module";
import authRouter from "./auth/auth.module";
import emotionRouter from "./emotion/emotion.module";
import habitRouter from "./habit/habit.module";

const router = combineRouters(
    rootRouter,
    authRouter,
    emotionRouter,
    habitRouter
);

export default router;
