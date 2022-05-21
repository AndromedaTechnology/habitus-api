import Router from "koa-router";

import config from "../../config";
import controller from "./tag.controller";
import jwtCheck from "../../middlewares/jwtCheck";

const ROUTES_PREFIX = "/tags";

const router = new Router();
router.prefix(config.api_prefix + ROUTES_PREFIX);
router.get("/", controller.findAll);
router.get("/:id", controller.find);
router.post("/", controller.create);
router.patch("/:id", jwtCheck, controller.update);
router.delete("/:id", jwtCheck, controller.delete);

export default router;
