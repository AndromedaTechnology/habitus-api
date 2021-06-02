import Router from "koa-router";

import controller from "./root.controller";

const router = new Router();
router.get("/", async (ctx, next) => {
  ctx.body = controller.findAll();
  await next();
});

export default router;
