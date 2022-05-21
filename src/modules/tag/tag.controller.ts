import mongoose from "mongoose";
import { RouterContext } from "koa-router";

import { TagDto } from "./tag.model";
import tagService from "./tag.service";

class TagController {
  async findAll(ctx: RouterContext) {
    ctx.body = await tagService.findAll();
    return ctx;
  }

  async find(ctx: RouterContext) {
    try {
      const item = await tagService.find(
        mongoose.Types.ObjectId(ctx.params.id)
      );
      ctx.body = item;
    } catch (e) {
      ctx.throw(404);
    }
    return ctx;
  }

  async create(ctx: RouterContext) {
    try {
      const item = await tagService.create(ctx.request.body as TagDto);
      ctx.body = item;
    } catch (e) {
      ctx.throw(422);
    }
    return ctx;
  }

  async update(ctx: RouterContext) {
    try {
      const item = await tagService.update(
        mongoose.Types.ObjectId(ctx.params.id),
        ctx.request.body as TagDto
      );
      ctx.body = item;
    } catch (e) {
      ctx.throw(422);
      // ctx.throw(403);
    }
    return ctx;
  }

  async delete(ctx: RouterContext) {
    try {
      const item = await tagService.delete(
        mongoose.Types.ObjectId(ctx.params.id)
      );
      ctx.body = item;
    } catch (e) {
      ctx.throw(404);
      // ctx.throw(403);
    }
    return ctx;
  }
}

export default new TagController();
