import mongoose from 'mongoose';
import { RouterContext } from "koa-router";

import { EmotionDto } from './emotion.model';
import emotionService from "./emotion.service";

class EmotionController {
  async findAll(ctx: RouterContext) {
    ctx.body = await emotionService.findAll();
    return ctx;
  }

  async find(ctx: RouterContext) {
    try {
      const item = await emotionService.find(
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
      const item = await emotionService.create(ctx.request.body as EmotionDto);
      ctx.body = item;
    } catch (e) {
      ctx.throw(422);
    }
    return ctx;
  }

  async update(ctx: RouterContext) {
    try {
      const item = await emotionService.update(
        mongoose.Types.ObjectId(ctx.params.id),
        ctx.request.body as EmotionDto
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
      const item = await emotionService.delete(
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

export default new EmotionController();
