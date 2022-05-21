import mongoose, { Schema } from "mongoose";

export class TagDto {
  _id?: mongoose.Types.ObjectId;
  slug?: string;
  name?: string;
  createdAt?: Date;
}

const tagSchema = new Schema({
  slug: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const tagModel = mongoose.model("Tag", tagSchema);

export default tagModel;
