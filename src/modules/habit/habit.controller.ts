import mongoose from 'mongoose';
import { RouterContext } from "koa-router";

import { HabitDto } from './habit.model';
import habitService from "./habit.service";

class HabitController {
  async findAll(ctx: RouterContext) {
    ctx.body = await habitService.findAll();
    return ctx;
  }

  async find(ctx: RouterContext) {
    try {
      const item = await habitService.find(
        mongoose.Types.ObjectId(ctx.params.id),
      );
      ctx.body = item;
    } catch (e) {
      ctx.throw(404);
    }
    return ctx;
  }

  async create(ctx: RouterContext) {
    try {
      const item = await habitService.create(ctx.request.body as HabitDto);
      ctx.body = item;
    } catch (e) {
      ctx.throw(422);
    }
    return ctx;
  }

  async update(ctx: RouterContext) {
    try {
      const item = await habitService.update(
        mongoose.Types.ObjectId(ctx.params.id),
        ctx.request.body as HabitDto
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
      const item = await habitService.delete(
        mongoose.Types.ObjectId(ctx.params.id),
      );
      ctx.body = item;
    } catch (e) {
      ctx.throw(404);
      // ctx.throw(403);
    }
    return ctx;
  }
}

export default new HabitController();
