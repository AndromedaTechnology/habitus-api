import { Context } from "koa";

import authService from "./auth.service";

class AuthController {
    getToken(ctx: Context) {
        try {
            const token = authService.getToken(ctx.request.body.password);
            ctx.status = 200;
            ctx.body = {
                message: "Authentication successful!",
                token,
            };
        } catch (e) {
            ctx.status = 401;
            ctx.body = {
                message: "Authentication failed."
            };
        }
        return ctx;
    }

}

export default new AuthController();