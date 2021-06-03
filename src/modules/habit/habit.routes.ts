import Router from "koa-router";

import controller from "./habit.controller";

const HABIT_ROUTES_PREFIX = "/habits";

const router = new Router();
router.prefix(HABIT_ROUTES_PREFIX);
router.get("/", controller.findAll);
router.get("/:id", controller.find);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
