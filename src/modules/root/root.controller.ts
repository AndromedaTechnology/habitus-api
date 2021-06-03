import { RouterContext } from "koa-router";

import rootService from "./root.service";

class RootController {
  async findAll(ctx: RouterContext) {
    ctx.body = await rootService.findAll();
    return ctx;
  }
}

export default new RootController();
