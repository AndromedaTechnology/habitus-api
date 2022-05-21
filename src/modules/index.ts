import combineRouters from "koa-combine-routers";

import rootRouter from "./root/root.module";
import authRouter from "./auth/auth.module";
import emotionRouter from "./emotion/emotion.module";
import habitRouter from "./habit/habit.module";
import tagRouter from "./tag/tag.module";

const router = combineRouters(
  rootRouter,
  authRouter,
  emotionRouter,
  habitRouter,
  tagRouter
);

export default router;
