import { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { PostService } from "../service";
import { PostCreateDto } from "../interfaces/post/PostCreateDto";
import { PostUpdateDto } from "../interfaces/post/PostUpdateDto";

const findPostList = async (req: Request, res: Response): Promise<void> => {
  try {
    const cursor = req.query.cursor ? Number(req.query.cursor) : 0;
    const data = await PostService.findPostList(cursor);
    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.OK, message.READ_POST_SUCCESS, data));
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const findPost = async (req: Request, res: Response): Promise<void> => {
  const { postId } = req.params;
  console.log(req.params);

  try {
    const data = await PostService.findPost(postId);
    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.OK, message.READ_POST_SUCCESS, data));
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const createPost = async (req: Request, res: Response): Promise<void> => {
  const postCreateDto: PostCreateDto = req.body;

  try {
    const data = await PostService.createPost(postCreateDto);
    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_POST_SUCCESS, data)
      );
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const updatePost = async (req: Request, res: Response): Promise<void> => {
  const postUpdateDto: PostUpdateDto = req.body;
  const { postId } = req.params;

  try {
    const data = await PostService.updatePost(postId, postUpdateDto);
    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.OK, message.UPDATE_POST_SUCCESS, data));
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const deletePost = async (req: Request, res: Response): Promise<void> => {
  const { postId } = req.params;

  try {
    const data = await PostService.deletePost(postId);
    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.OK, message.DELETE_POST_SUCCESS, data));
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  findPostList,
  findPost,
  createPost,
  updatePost,
  deletePost,
};
