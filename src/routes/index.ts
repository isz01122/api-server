import { Router } from "express";
import User from "./User";
import PostRouter from "./PostRouter";

const router: Router = Router();

router.use("/user", User);
router.use("/post", PostRouter);

export default router;
