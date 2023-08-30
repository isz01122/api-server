import mongoose from "mongoose";
import { PostInfo } from "../interfaces/post/PostInfo";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const PostSchema = new mongoose.Schema({
  id: Number,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
}).plugin(AutoIncrement, {
  id: "id_seq",
  inc_field: "id",
});

export default mongoose.model<PostInfo & mongoose.Document>("Post", PostSchema);
