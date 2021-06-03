import Router from "koa-router";

import controller from "./root.controller";

const router = new Router();
router.get("/", controller.findAll);

export default router;
