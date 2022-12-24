import mongoose from "mongoose";

export interface PostUpdateDto {
  _id: mongoose.Schema.Types.ObjectId;
  title?: string;
  content?: string;
}
