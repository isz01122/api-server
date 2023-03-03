import { Router } from "express";
import User from "./User";
import PostRouter from "./PostRouter";

const router: Router = Router();

router.use("/v1/user", User);
router.use("/v1/post", PostRouter);

export default router;
