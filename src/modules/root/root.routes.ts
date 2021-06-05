import Router from "koa-router";

import config from "../../config";
import controller from "./root.controller";

const router = new Router();
router.prefix(config.api_prefix);
router.get("/", controller.findAll);

export default router;
