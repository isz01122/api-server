import Post from "../models/Post";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { PostCreateDto } from "../interfaces/post/PostCreateDto";
import { PostResponseDto } from "../interfaces/post/PostResponseDto";
import { PostUpdateDto } from "../interfaces/post/PostUpdateDto";

const updatePost = async (
  postId: string,
  postUpdateDto: PostUpdateDto
): Promise<PostUpdateDto | null> => {
  try {
    await Post.findOneAndUpdate({ id: postId }, postUpdateDto); // update 로직
    const post = await findPost(postId); // update 된 정보를 불러오는 로직
    // null이 될 경우를 처리해줘야 한다.
    if (!post) {
      return null;
    }
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findPostList = async (cursor): Promise<PostResponseDto[] | null> => {
  try {
    const limit = 5;
    const post = await Post.find().skip(cursor).limit(limit);
    if (!post) {
      return null;
    }
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findPost = async (postId: string): Promise<PostResponseDto | null> => {
  try {
    const post = await Post.findOne({ id: postId });
    if (!post) {
      return null;
    }
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createPost = async (
  postCreateDto: PostCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    // create를 위해 각 filed명에 값들을 할당시켜준다.
    const post = new Post({
      title: postCreateDto.title,
      content: postCreateDto.content,
    });

    await post.save();

    const data = {
      _id: post.id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deletePost = async (postId: string): Promise<PostResponseDto | null> => {
  try {
    const post = await Post.findOneAndDelete({ id: postId });
    if (!post) {
      return null;
    }
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  findPostList,
  findPost,
  createPost,
  updatePost,
  deletePost,
};
