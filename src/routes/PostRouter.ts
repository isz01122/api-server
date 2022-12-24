import { Router } from "express";
import { PostController } from "../controllers";

const router: Router = Router();

router.get("/", PostController.findPostList);
router.get("/:postId", PostController.findPost);
router.post("/", PostController.createPost);
router.put("/:postId", PostController.updatePost);
router.delete("/:postId", PostController.deletePost);

export default router;
