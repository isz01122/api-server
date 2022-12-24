import mongoose from "mongoose";
import { PostCreateDto } from "./PostCreateDto";

export interface PostResponseDto extends PostCreateDto {
  // PostCreateDto 를 상속받아 확장시킨다.
  _id: mongoose.Schema.Types.ObjectId;
}
