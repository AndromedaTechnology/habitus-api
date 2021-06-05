import Router from "koa-router";

import config from "../../config";
import controller from "./habit.controller";
import jwtCheck from '../../middlewares/jwtCheck';

const HABIT_ROUTES_PREFIX = "/habits";

const router = new Router();
router.prefix(config.api_prefix + HABIT_ROUTES_PREFIX);
router.get("/", controller.findAll);
router.get("/:id", controller.find);
router.post("/", jwtCheck, controller.create);
router.patch("/:id", jwtCheck, controller.update);
router.delete("/:id", jwtCheck,controller.delete);

export default router;
