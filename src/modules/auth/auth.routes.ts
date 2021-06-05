import Router from "koa-router";

import config from "../../config";
import authController from "./auth.controller";

const ROUTES_PREFIX = "/auth";

const router = new Router();
router.prefix(config.api_prefix + ROUTES_PREFIX);
router.post("/token", authController.getToken);

export default router;
