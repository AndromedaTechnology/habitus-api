import combineRouters from "koa-combine-routers";

import rootRouter from "./root/root.module";

const router = combineRouters(rootRouter);

export default router;
